import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react'
import { startSetNotes } from '../../store/journal/thunks';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SlideBarItem = ({id, title,body, date, imageUrls }) => {
  
    const dispatch = useDispatch();



    const nuevoTilulo = useMemo(() =>{
    
          return  (title.length >17)
            ?  title.subString(0,17) + '...'
            :  title;
    },[title]);

    const onClickNote = () => {

      dispatch(setActiveNote({id, title,body, date, imageUrls }) );
    }
  
  return (
    <ListItem  disablePadding>
    <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={ title } />
            <ListItemText secondary={ body } />
        </Grid>
    </ListItemButton>
   </ListItem>
  )
}
