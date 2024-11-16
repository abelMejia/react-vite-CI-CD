import { Control, Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import { IField } from "@interfaces/IField";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CheckBoxInput({ currentField, control}: { currentField: IField; control: Control<any> }) {
  const { key, rules } = currentField
  let { inputProps } = currentField
  const { label } = inputProps

  return <Controller
    name={key}
    control={control}
    rules={rules}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render={({ field, formState }: any) => {
      const { defaultValues } =  formState;

      if (defaultValues && defaultValues[key]) {
        inputProps = {...inputProps, defaultChecked: defaultValues[key]}
      }

      return <FormControlLabel
          control={<Checkbox  {...field} {...inputProps}/> }
          label={label}
      />
  }
  }
/>
}

export default CheckBoxInput;
