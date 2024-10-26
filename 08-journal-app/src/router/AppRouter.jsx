import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useSelector } from 'react-redux';
import { CheckingAuth } from '../ui/components/CheckingAuth';


export const AppRouter = () => {

  const { estado } = useSelector (state =>  state.login);

  console.log ("AppRouter status:",estado)

  if (estado === 'checking' ) {
    return <CheckingAuth />
  }

  return (


    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } />

    </Routes>
  )
}
