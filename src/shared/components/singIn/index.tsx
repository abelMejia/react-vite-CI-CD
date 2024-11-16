/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Button, Grid, IconButton, InputAdornment, Link, Typography } from "@mui/material";
import { AccountCircle, Block, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IField } from "@interfaces/IField";
import DynamicForm from "@components/dynamicForm";

function SingIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "abelm@g.com",
      password: "12313123123",
      rememberMe: true,
    },
  })

  const fields: IField[] = [
    {
      key: 'email',
      rules: { required: "El email es requerido" },
      controlType: 'textField',
      inputProps: {
        label: "Email Address",
        type: "email",
        variant:  "outlined",
        fullWidth: true,
        margin: "normal",
        autoFocus: true,
        required: true,
        color: "warning",
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
        required: true
      }
    },
  ]

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.info('submit', data)
  }

  return <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <Block />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>

    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off">
        <DynamicForm fields={fields} control={control}/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
    </Box>
</Box>
}

export default SingIn;
