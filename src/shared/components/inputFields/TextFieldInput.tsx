/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller, ControllerFieldState, FieldError, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import { IField } from "@interfaces/IField";
import { Rule } from "@interfaces/Rule";

function TextInput({ currentField, control }: { currentField: IField; control: Control<FieldValues>; }) {
  const { key, rules, inputProps, options } = currentField

  const getErrorMessage = (error: FieldError, rules: Rule) => {
      const { maxLength, minLength, min, max} = rules

      const obj: any = {
        maxLength: `Máximo ${maxLength} caracteres.`,
        minLength: `Mínimo ${minLength} caracteres.`,
        min: `El valor debe ser superior o igual a ${min}`,
        max: `El valor debe ser inferior o igual a ${max}`,
        pattern: 'El campo no tiene un formato válido'
      }

      return error?.type && error?.type === 'required' ? error?.message : obj[error?.type]
  }

  return <Controller
      control={control}
      name={key}
      rules={rules}
      render={({ field, fieldState }: { field: any; fieldState: ControllerFieldState; }) => {
        return <TextField
          style={{ marginTop: '8px' }}
          error={!!fieldState.invalid}
          helperText={fieldState.error && rules && getErrorMessage(fieldState.error, rules)}
          {...field}
          {...inputProps}
          >
            {options && options?.length > 0 ? options: null}
          </TextField>
      }}
  />
}

export default TextInput;
