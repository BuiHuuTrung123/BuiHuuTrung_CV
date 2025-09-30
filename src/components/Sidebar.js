import { Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatarImg from '../assets/img/image.png'
function Sidebar() {
  const navItems = [
    { label: 'About Me', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Skills', to: 'skills' },
    { label: 'Education', to: 'education' },
    { label: 'Interests', to: 'interests' },
    { label: 'The End', to: 'the-end' },
    { label: 'Download PDF', to: '/files/DO TRUNG QUAN - FrontEnd Developer.pdf', download: true },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { xs: '100%', sm: 240 },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: 240 },
          boxSizing: 'border-box',
          backgroundColor: 'primary.main',
          color: '#fff',
          boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={avatarImg}

            sx={{ width: 190, height: 190, objectFit: 'contain', bgcolor: 'transparent' }}
          />
        </Stack>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            button
            component={item.download ? 'a' : Link}
            to={item.to}
            href={item.download ? item.to : undefined}
            download={item.download}
            sx={{
              color: item.label === 'Download PDF' ? 'secondary.main' : '#fff',
              py: 1.5,
              '&:hover': { bgcolor: 'primary.dark' },

            }}
            smooth
            duration={500}
          >
            <ListItemText primary={item.label} sx={{
              display: 'flex',
               justifyContent: 'center'
            }} />
            {item.label === 'Download PDF' && <i className="fa fa-download" style={{ fontSize: '14px' }} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;