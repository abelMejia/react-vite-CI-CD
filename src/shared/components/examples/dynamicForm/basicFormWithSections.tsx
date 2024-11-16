import DynamicForm from "@components/dynamicForm";
import { IField } from "@interfaces/IField";
import {  Box, Button, Divider, MenuItem, Typography } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function BasicFormWithSections() {
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

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "abelm@g.com",
      password: "12313123123",
      remember: true,
      currency: "",
      Outlined: "",
      age: ""
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  const fields: IField[] = [
    {
      key: 'Outlined',
      rules: { required: "Required" },
      controlType: 'textField',
      inputProps: {
        label: "Outlined",
        variant:  "outlined",
        margin: "normal",
        fullWidth: true,
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
        label: 'Currency'
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
    }
  ]

  return <>
     <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off">
          <Typography component="h1" variant="h5">
            Section 1
          </Typography>
          <DynamicForm
            fields={fields}
            control={control}
            breakpoints={{xs: 3}}
          />

          <Typography component="h1" variant="h5">
            Section 2
          </Typography>
          <Divider  style={{ marginTop: '15px', marginBottom: '15px' }}/>
          <DynamicForm
            fields={fields}
            control={control}
            breakpoints={{xs: 3}}
          />

          <Typography component="h1" variant="h5">
            Section 3
          </Typography>
          <Divider  style={{ marginTop: '15px', marginBottom: '15px' }}/>
          <DynamicForm
            fields={fields}
            control={control}
            breakpoints={{xs: 3}}
          />
          <Typography component="h1" variant="h5">
            Section 4
          </Typography>
          <Divider  style={{ marginTop: '15px', marginBottom: '15px' }}/>
          <DynamicForm
            fields={fields}
            control={control}
            breakpoints={{xs: 3}}
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

export default BasicFormWithSections;

