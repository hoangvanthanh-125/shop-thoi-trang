import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { width } from "@mui/system";
import React from "react";
import { useController } from "react-hook-form";

export const InputField = ({ control, name, placeholder,type }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <TextField
    type={type || "text"}
      style={{ width: "100%"}}
      placeholder={placeholder}
      {...inputProps}
      inputRef={ref}
    />
  );
};
interface PropsSelect {
  control:any,
  name:string,
  label:string,
  options:any,
  onChange?:(string) => any
}
export const SelectField = ({
  control,
  name,
  label,
  options,
  onChange
}:PropsSelect) => {
  const {
    field: { ref, ...selectProps },
  } = useController({
    name,
    control,
    defaultValue: ""
  });
  return (
    <FormControl  style={{ width: "100%" }}>
      <InputLabel>{label}</InputLabel>
      <Select  {...selectProps} inputRef={ref}>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export const CheckBoxField = ({ control, name, label } ) => {
  const {
    field: { ref, ...CheckBoxProps },
  } = useController({
    name,
    control,
    defaultValue: false,
  });
  return (
    <FormControlLabel  control={<Checkbox {...CheckBoxProps} />} label={label} />
  );
};
