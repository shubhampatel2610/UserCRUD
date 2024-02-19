import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { CheckboxContainer, LableText, SelectBox } from "./styles";
import { Controller } from "react-hook-form";

const MuiRadioButton = ({
  label,
  control,
  className,
  name,
  onChange,
  options,
}) => {
  return (
    <SelectBox className={className}>
      <LableText>{label}</LableText>
      <Controller
        control={control}
        name={name}
        className={className}
        render={({ field }) => (
          <CheckboxContainer>
            <RadioGroup
              {...field}
              value={field.value || ""}
              onChange={(e) => {
                field.onChange(e.target.value);
                if (onChange) {
                  onChange(e.target.value);
                }
              }}
            >
              {options.map((item) => {
                return (
                  <FormControlLabel
                    key={item.id}
                    value={item.id.toString()}
                    control={<Radio />}
                    label={item.label}
                  />
                );
              })}
            </RadioGroup>
          </CheckboxContainer>
        )}
      />
    </SelectBox>
  );
};

export default MuiRadioButton;
