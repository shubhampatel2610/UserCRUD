import { Controller } from "react-hook-form";
import { InputLabel } from "@mui/material";
import { CustomTextField, TextFieldContainer } from "./styles";

const MuiTextField = ({
  label,
  value,
  placeholder,
  type,
  onClick,
  name,
  control,
  autoComplete,
  className,
  required,
  ...props
}) => {
  return (
    <TextFieldContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <Controller
        name={name}
        control={control}
        defaultValue={value}
        render={({ field }) => (
          <CustomTextField
            required={required}
            className={className}
            id="outlined-basic"
            variant="outlined"
            size={"small"}
            placeholder={placeholder}
            InputProps={{
              autoComplete: autoComplete && autoComplete,
            }}
            type={type}
            {...field}
            {...props}
          />
        )}
      />
    </TextFieldContainer>
  );
};

export default MuiTextField;
