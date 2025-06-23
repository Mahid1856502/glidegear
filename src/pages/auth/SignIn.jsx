import { IMAGES } from "../../images";
import { MinimalTextfield } from "../../common/TextField";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { MinimalButton } from "../../common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import FieldError from "../../common/FieldError";
import PATH from "../../routes/path";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAuthContext } from "../../hooks/useAuthContext";
import { signin } from "../../services/auth";

const CUSTOMER_LOGIN = `mutation GenerateCustomerToken {
    generateCustomerToken(email: "test@email.com", password: "123456") {
        token
    }
}`;

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();
  const { onLogging } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationKey: ["signin"],
    mutationFn: signin,
    onSuccess: (response) => {
      debugger;
      onLogging(response?.generateCustomerToken?.token);
    },
  });

  const onSubmit = (data) => {
    const finalData = {
      username: data?.username,
      password: data?.password,
    };
    mutation.mutate(finalData);
  };

  const googleUrl = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=${process.env.REACT_APP_GOOGLE_SOCIALLOGIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&scope=email%20profile&state&include_granted_scopes=true&response_type=code&access_type=offline&prompt=select_account&service=lso&o2v=1&flowName=GeneralOAuthFlow`;

  const linkedinUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_SOCIALLOGIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&state=foobar&scope=openid%20profile%20email`;

  const fbUrl = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${
    process.env.REACT_APP_FB_SOCIALLOGIN_CLIENT_ID
  }&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&state=${""}"}`;

  return (
    <div className="dark:border-strokedark dark:bg-boxdark  w-full flex justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 pb-10 text-center">
        <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
          Sign In
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
        <div className="flex justify-center items-center">
          <div className="h-[0.5px] bg-lightgray mx-3 w-full " />
          <div className="text-black my-3">or</div>
          <div className="h-[0.5px] bg-lightgray mx-3 w-full " />
        </div>
        <div className="flex justify-center">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MinimalTextfield
                  fullWidth
                  label="Email"
                  {...register("username", { required: true })}
                />
                {errors.username && (
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
                  <FieldError message="This field is required" />
                )}
              </Grid>
              <Grid item xs={12}>
                <p className="font-semibold mb-5 text-left">
                  Forgot your password?{" "}
                  <span className="text-link cursor-pointer">
                    Reset password
                  </span>
                </p>
                <MinimalButton primary type="submit" className="w-full my-10">
                  Sign in
                </MinimalButton>
                <p className="text-center font-semibold mt-5">
                  Don't have an account?{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => navigate(PATH.SIGN_UP)}
                  >
                    Register here
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

export default SignIn;
