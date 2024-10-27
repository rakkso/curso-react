import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

const { estado  } = useCheckAuth();

  console.log ("AppRouter status:",estado)

  if (estado === 'checking' ) {
    return <CheckingAuth />
  }

  return (


    <Routes>

       {
         (estado === 'autenticado')
         ? <Route path="/*" element={ <JournalRoutes /> } />
         : <Route path="/auth/*" element={ <AuthRoutes />   } />
       }

       <Route path='/*' element={<Navigate to='/auth/login'/>} />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}
