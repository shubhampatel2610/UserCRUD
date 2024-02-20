import { Controller } from "react-hook-form";
import {
  MuiDropdown,
  MuiInput,
  SelectBox,
  LableText,
  CustomPaper,
} from "./styles";

const MuiAutocomplete = ({
  placeholder,
  options,
  handleChange,
  name,
  className,
  label,
  control,
  size = "small",
  defaultValue,
}) => {
  return (
    <SelectBox className={className}>
      <LableText>{label}</LableText>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <MuiDropdown
            options={options}
            renderInput={(params) => (
              <MuiInput {...params} placeholder={placeholder} />
            )}
            disableClearable
            size={size}
            value={value}
            onChange={(_, data) => {
              onChange(data.label);
              if (handleChange) handleChange(_, data);
              return data.label;
            }}
            PaperComponent={({ children }) => (
              <CustomPaper>{children}</CustomPaper>
            )}
          />
        )}
      />
    </SelectBox>
  );
};

export default MuiAutocomplete;
