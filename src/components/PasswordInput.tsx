import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordInputProps {
  label: string;
  error: string | undefined;
  disabled?: boolean;
}

const PasswordInputBase: ForwardRefRenderFunction<HTMLInputElement, PasswordInputProps> = ({
  label,
  error = null,
  disabled = false,
  ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      label={label}
      type={showPassword ? "text" : "password"}
      error={!!error}
      helperText={error}
      disabled={disabled}
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
      }}
      ref={ref}
      {...rest}
    />
  );
}

const PasswordInput = forwardRef(PasswordInputBase);

export default PasswordInput;