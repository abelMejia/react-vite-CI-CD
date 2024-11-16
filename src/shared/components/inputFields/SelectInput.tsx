import { Control, Controller, ControllerFieldState, FieldValues } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material";
import { IField } from "@interfaces/IField";

function SelectInput({ currentField, control }: { currentField: IField; control: Control<FieldValues>; }) {
  const { key, rules, inputProps, options } = currentField
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { label }: any = inputProps

  return <Controller
      control={control}
      name={key}
      rules={rules}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render={({ field, fieldState}: { field: any; fieldState: ControllerFieldState; }) => {
        return <FormControl sx={{ m: 1, width: '100%' }} style={{ marginTop: '8px', marginLeft: '0' }}>
          <InputLabel>{ label }</InputLabel>
          <Select
            error={!!fieldState.invalid}
            {...field}
            {...inputProps}
          >
            {options && options?.length > 0 ? options: null}
          </Select>
          {!!fieldState.invalid &&  <FormHelperText style={{ color: '#d32f2f' }}>{
              fieldState.error?.message ?? ""
          }</FormHelperText>}
        </FormControl>
      }}
  />
}

export default SelectInput;
