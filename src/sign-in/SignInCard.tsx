import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link as RouterLink } from "react-router-dom";
import { styled } from '@mui/material/styles';

import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import DynamicForm from '@components/dynamicForm';
import { IField } from '@interfaces/IField';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

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

  return (
    <Card variant="outlined">
      {/*<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SitemarkIcon />
  </Box>*/}
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <DynamicForm fields={fields} control={control}/>
        <Link
              component="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              Forgot your password?
        </Link>
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="submit" fullWidth variant="contained">
          Sign in
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <span>
            <Link
              component={RouterLink} to="/signUp"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Sign up
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Facebook')}
          startIcon={<FacebookIcon />}
        >
          Sign in with Facebook
        </Button>
      </Box>
    </Card>
  );
}
