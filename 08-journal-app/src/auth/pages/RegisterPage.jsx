import { Link as RouterLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { statCreatingUserWiehEmailPassword } from '../../store/auth/thunks';


const formData = {
  email: 'rak0kso@gmail.com',
  password : '123',
  displayName: 'Óscar' 
 }

 const formValidations = {
  email:[ (value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value)=> value.length >=6 ,'El password de de tener más de 6 letras'],
  displayName: [(value)=> value.length >=1,'El displayName es obligatorio']
}




export const RegisterPage = () => {

const dispatch = useDispatch();

const { estado, errorMessage} = useSelector(state => state.login);
const isCheckingAuthentication = useMemo( () => estado === 'checking' )


  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
} = useForm(formData,formValidations);

console.log ("displayNameValid",displayNameValid);
const [formSubmitted,setFormSubmitted]= useState (false);
  const onSubmit = (event) =>{
    event.preventDefault();
    setFormSubmitted(true);
    console.log(formState);
    dispatch (statCreatingUserWiehEmailPassword(formState));
}

                {/* error={!displayNameValid}
                helperText = {displayNameValid}  */}

          
 
  return (
    <AuthLayout title="Crear cuenta">
      {
/*
<h1>FormValid: { isFormValid ? ' Válido':'Incorrecto' } </h1>*/

      }
      
      <form onSubmit={onSubmit}>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name="displayName"
                value={displayName}
                error = {!!displayNameValid && formSubmitted}
                helperText = {displayNameValid}

                onChange= {onInputChange}

              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={email}
                error = {!!emailValid && formSubmitted}
                helperText = {emailValid}

                onChange= {onInputChange}
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
                error = {!!passwordValid && formSubmitted }
                helperText = {passwordValid}

                onChange= {onInputChange}
              />
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item  xs={12}   display= { !!errorMessage ? '':'none'}>
                  <Alert severity='error' >{errorMessage}</Alert>
            </Grid>
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button type="submit" variant='contained' fullWidth    display= { isCheckingAuthentication}>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
