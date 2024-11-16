import {  Box, Button, IconButton, InputAdornment, MenuItem, Typography } from "@mui/material";
import DynamicForm from "../../dynamicForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IField } from "@interfaces/IField";

const BasicFormWithBreakpoints = () =>  {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "abelm@g.com",
      password: "12313123123",
      currency: "",
      Outlined: "",
      readOnly: "Read Only",
      age: "",
      weight: "",
      rememberMe: true,
      terms: true
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  const age = [
    {
      value: 'Ten',
      label: '10',
      id: 1,
    },
    {
      value: 'Twenty',
      label: '20',
      id: 2
    }
  ];

  const fields: IField[] = [
    // BASIC TEXTFIELD
    {
      key: 'Outlined',
      controlType: 'textField',
      inputProps: {
        label: "Outlined",
        variant:  "outlined",
        margin: "normal",
        fullWidth: true
      }
    },
    {
      key: 'disabled',
      controlType: 'textField',
      inputProps: {
        label: "disabled",
        placeholder: "disabled",
        variant:  "outlined",
        margin: "normal",
        disabled: true,
        fullWidth: true
      }
    },
    {
      key: 'readOnly',
      controlType: 'textField',
      inputProps: {
        label: "readOnly",
        placeholder: "readOnly",
        variant:  "outlined",
        margin: "normal",
        InputProps: {
          readOnly: true,
        },
        fullWidth: true
      }
    },
    {
      key: 'number',
      controlType: 'textField',
      inputProps: {
        label: "number",
        placeholder: "number",
        variant:  "outlined",
        margin: "normal",
        type: 'number',
        fullWidth: true
      }
    },
    {
      key: 'search',
      controlType: 'textField',
      inputProps: {
        label: "search Field",
        variant:  "outlined",
        margin: "normal",
        type: 'search',
        fullWidth: true
      }
    },
    {
      key: 'age',
      controlType: 'textField',
      options: age.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.label}
        </MenuItem>
      )),
      inputProps: {
        variant: 'outlined',
        required: true,
        fullWidth: true,
        label: "Age",
        select: true,
      }
    },
    {
      key: 'multiline',
      controlType: 'textField',
      inputProps: {
        variant: 'outlined',
        placeholder: "Placeholder",
        label: "Multiline",
        multiline: true,
        fullWidth: true,
        minRows: 1,
        maxRows: 1
      }
    },
    {
      key: 'price',
      controlType: 'textField',
      inputProps: {
        type: "number",
        label: "Price",
        variant:  "outlined",
        fullWidth: true,
        margin: "normal",
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">$</InputAdornment>
          )
        }
      }
    },
    {
      key: 'weight',
      controlType: 'textField',
      inputProps: {
        label: "Weight",
        variant:  "outlined",
        fullWidth: true,
        type: "number",
        margin: "normal",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">kg</InputAdornment>
          )
        }
      }
    },
    {
      key: 'password',
      rules: { required: "El password es requerido" },
      controlType: 'textField',
      inputProps: {
        label: "Password",
        type: showPassword ? "text": "password",
        variant:  "outlined",
        fullWidth: true,
        margin: "normal",
        autoComplete: "current_password",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
               <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();
                  }}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
          ),
        },
      }
    },
    {
      key: 'rememberMe',
      rules: { required: true },
      controlType: 'checkbox',
      inputProps: {
        label: "Remember me",
        required: true,
        color: "secondary"
      }
    },
    {
      key: 'terms',
      rules: { required: true },
      controlType: 'checkbox',
      inputProps: {
        label: "Acepto términos y condiciones",
        disabled: true
      }
    },
  ]

  const breakpoints = {
    xs: 6,
    md: 3,
    sm: 12
  }

  return <>
    <Typography component="h1" variant="h5" style={{ marginTop: '30px' }}>
      Basic Forms With Breakpoints
     </Typography>
     <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off">
          <DynamicForm
            fields={fields}
            control={control}
            breakpoints={breakpoints}
          />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Guardar
      </Button>
    </Box>
  </>
}

export default BasicFormWithBreakpoints;
