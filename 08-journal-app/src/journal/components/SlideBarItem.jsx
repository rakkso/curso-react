import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react'

export const SlideBarItem = ({titulo, cuerpo}) => {

    const nuevoTilulo = useMemo(() =>{
          return  (titulo.length >17)
            ?  titulo.subString(0,17) + '...'
            :  titulo;
    },[titulo]);


  return (
    <ListItem  disablePadding>
    <ListItemButton>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={ titulo } />
            <ListItemText secondary={ cuerpo } />
        </Grid>
    </ListItemButton>
   </ListItem>
  )
}
