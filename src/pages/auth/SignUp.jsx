import { IMAGES } from "../../images";
import { MinimalTextfield } from "../../common/TextField";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { MinimalButton } from "../../common/Button";
import { useForm } from "react-hook-form";
import FieldError from "../../common/FieldError";
import { useNavigate } from "react-router-dom";
import PATH from "../../routes/path";
import { useMutation } from "react-query";
import { useAuthContext } from "../../hooks/useAuthContext";
import { signin, signup } from "../../services/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const handleShowPassword = () => setShowPassword((show) => !show);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { onLogging } = useAuthContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const signinMutation = useMutation({
    mutationKey: ["signin"],
    mutationFn: signin,
    onSuccess: (response) => {
      debugger;
      onLogging(response?.generateCustomerToken?.token);
    },
  });

  const mutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: signup,
    onSuccess: (response) => {
      debugger;
      console.log(
        "response?.createCustomerV2?.customer?.email",
        response?.createCustomerV2?.customer?.email
      );
      const finalData = {
        username: response?.createCustomerV2?.customer?.email,
        password: password || "",
      };
      signinMutation.mutate(finalData);
    },
  });

  const onSubmit = (data) => {
    const finalData = {
      email: data?.email,
      firstname: data?.firstName,
      lastname: data?.lastName,
      password: data?.password,
    };

    setPassword(data?.password);
    mutation.mutate(finalData);
  };

  const googleUrl = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=${process.env.REACT_APP_GOOGLE_SOCIALLOGIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&scope=email%20profile&state&include_granted_scopes=true&response_type=code&access_type=offline&prompt=select_account&service=lso&o2v=1&flowName=GeneralOAuthFlow`;

  const linkedinUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_SOCIALLOGIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&state=foobar&scope=openid%20profile%20email`;

  const fbUrl = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${
    process.env.REACT_APP_FB_SOCIALLOGIN_CLIENT_ID
  }&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&state=${""}"}`;

  return (
    <div className="rounded-sm dark:border-strokedark dark:bg-boxdark">
      <div className="w-full p-4 pb-10 text-center">
        <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
          Create an account
        </h2>
        <div className="mb-3 flex items-center justify-center">
          <img
            src={IMAGES.FACEBOOK_ICON}
            className="mx-2 cursor-pointer"
            width={26}
            height={26}
            alt="social login"
            onClick={() => {
              window.location.href = fbUrl;
              localStorage.setItem("provider", "facebook");
            }}
          />
          <img
            src={IMAGES.GOOGLE_ICON}
            className="mx-2 cursor-pointer"
            width={26}
            height={26}
            alt="social login"
            onClick={() => {
              window.location.href = googleUrl;
              localStorage.setItem("provider", "google");
            }}
          />
          <img
            src={IMAGES.LINKEDIN_ICON}
            className="mx-2 cursor-pointer"
            width={26}
            height={26}
            alt="social login"
            onClick={() => {
              window.location.href = linkedinUrl;
              localStorage.setItem("provider", "linkedin");
            }}
          />
        </div>
        <div className="text-black my-3">or continue with</div>
        <div className="flex justify-center">
          <form
            className="w-full sm:w-1/2 lg:w-1/3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MinimalTextfield
                  fullWidth
                  label="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <FieldError message="This field is required" />
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <MinimalTextfield
                  fullWidth
                  label="First Name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <FieldError message="This field is required" />
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <MinimalTextfield
                  fullWidth
                  label="Last Name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <FieldError message="This field is required" />
                )}
              </Grid>
              <Grid item xs={12}>
                <MinimalTextfield
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    pattern: {
                      value:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}/,
                      message:
                        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                    },
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && (
                  <FieldError message={errors.password?.message?.toString()} />
                )}
              </Grid>
              <Grid item xs={12}>
                <MinimalTextfield
                  fullWidth
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.confirmPassword && (
                  <FieldError
                    message={errors?.confirmPassword?.message?.toString()}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Keep me signed in"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Enable Two-factor Authentication (2FA) "
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Subscribe to our Newsletter"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <p className="text-left">
                  Selecting this checkbox will keep you signed in to your
                  account on this device until you sign out. Do not select this
                  on shared devices.
                </p>
              </Grid>
              <Grid item xs={12}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => setIsTermsChecked(e?.target.checked)}
                      />
                    }
                    label="I accept Terms of Use"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => setIsPrivacyChecked(e?.target.checked)}
                      />
                    }
                    label="I accept Privacy Policy"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <MinimalButton
                  primary
                  type="submit"
                  className="w-full my-10"
                  disabled={!isPrivacyChecked || !isTermsChecked}
                >
                  Create Account
                </MinimalButton>
                <p className="text-center font-semibold mt-5">
                  Already have an account?{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => navigate(PATH.LOGIN)}
                  >
                    Login
                  </span>
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
