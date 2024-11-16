import {  Box, Button, InputAdornment, MenuItem, Typography } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AccountCircle } from "@mui/icons-material";
import { IField } from "@interfaces/IField";
import DynamicForm from "@components/dynamicForm";

const BasicFormWithValidation = () =>  {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      currency: "",
      age: "",
      days: 0,
      email: ""
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

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
    {
      key: 'email',
      rules: { required: "El email es requerido", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      controlType: 'textField',
      inputProps: {
        label: "Email Address",
        type: "email",
        variant:  "outlined",
        fullWidth: true,
        margin: "normal",
        autoFocus: true,
        required: true,
        InputProps: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }
      }
    },
    {
      key: 'name',
      controlType: 'textField',
      rules: { required: 'El nombre es requerido', maxLength: 5, minLength: 2 },
      inputProps: {
        label: "Nombre",
        variant:  "outlined",
        margin: "normal",
        required: true,
        fullWidth: true
      }
    },
    {
      key: 'days',
      controlType: 'textField',
      rules: { required: 'El campo No.de días es requerido', min: 2, max: 10 },
      inputProps: {
        label: "No.de días",
        type: "number",
        variant:  "outlined",
        margin: "normal",
        required: true,
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
      key: 'currency',
      controlType: 'selectField',
      rules: { required: 'El currency es requerido' },
      options: currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )),
      inputProps: {
        variant: 'outlined',
        fullWidth: true,
        label: 'Currency',
        required: true
      }
    },
  ]

  const breakpoints = {
    xs: 12,
    md: 12,
    sm: 12
  }

  return <>
    <Typography component="h1" variant="h5" style={{ marginTop: '30px' }}>
      Basic Forms with Validation
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
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Guardar
      </Button>
    </Box>
  </>
}

export default BasicFormWithValidation;
