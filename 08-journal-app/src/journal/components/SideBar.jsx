import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { SlideBarItem } from './SlideBarItem';

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector (state =>  state.login);
  const { notes } = useSelector(state => state.journal)

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                        {displayName}
                 </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    notes.map( nota => (
                        <SlideBarItem key={nota.id} titulo={nota.title} cuerpo={nota.body} />
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
