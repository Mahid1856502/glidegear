import { TextField, styled } from "@mui/material";

export const MinimalTextfield = styled(TextField)((props) => ({
  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiInputBase-root": {
    borderRadius: "10px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: props?.border ? "#014175" : "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: props?.border ? "#014175" : "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
}));
