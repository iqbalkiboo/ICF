import * as React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      <ListItemButton >
        <ListItemText primary="Sent mail" style={{ color: '#9999' }}/>
      </ListItemButton>
      <hr />
      <ListItemButton>
        <ListItemText primary="Drafts" style={{ color: '#9999' }}/>
      </ListItemButton>
      <hr />
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" style={{ color: '#9999' }}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <hr />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" style={{ color: '#9999' }}/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
