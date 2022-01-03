import { forwardRef, ForwardRefRenderFunction } from "react";
import { TextField } from "@mui/material";

interface IInputProps {
  label: string;
  error: string | undefined;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({
  label,
  error = null,
  ...rest }, ref) => {

  return (
    <TextField
      fullWidth
      label={label}
      error={!!error}
      helperText={error}
      ref={ref}
      {...rest}
    />
  );
}

const Input = forwardRef(InputBase);

export default Input;