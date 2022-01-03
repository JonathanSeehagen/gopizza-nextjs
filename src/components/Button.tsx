
import { Button as MUIButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { MouseEventHandler } from "react";

interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
  // onClick?: MouseEventHandler<HTMLButtonElement>
  hidden?: boolean;
  text?: string;
}

export default function Button({
  isLoading = false,
  // onClick,
  hidden = false,
  text = "Salvar",
  ...rest
}: ButtonProps) {
  return (
    <MUIButton
      variant="contained"
      // type='submit'
      // onClick={onClick}
      {...rest}
    >
      {text}
    </MUIButton>
  )
}