import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication,startGoogleSignIn} from '../../store/auth'
import { useMemo } from 'react';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const {estado,errorMessage} = useSelector ( state => state.login);
  console.log("estado",estado);

  const estaAutenticado = useMemo(() => estado == 'autenticado', [estado]);


  const {email,password, onInputChange} = useForm({
    email: 'Oscar@email.com',
    password: '1111'
  })


  const onSubmit = (event) => {
    event.preventDefault();

    console.log("LoginPage:","password:",password,"email:",email,"junto:", {email,password});

    dispatch (checkingAuthentication({email,password}))
  }
    

  const onGoogleSignIn = ()  => {

    console.log("onGoogleSignIn ")

    dispatch(startGoogleSignIn());
  }



    return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={email}
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={password}
                onChange={ onInputChange }
              />
            </Grid>
            


            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

<Grid item  xs={12}   display= { !!errorMessage ? '':'none'}>
      <Alert severity='error' >{errorMessage}</Alert>
</Grid>
</Grid>


            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button  disabled={estaAutenticado} type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button disabled={estaAutenticado}  variant='contained' fullWidth onClick= { onGoogleSignIn }>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
