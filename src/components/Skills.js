import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Skills() {
const techIcons = [
  { class: 'fab fa-js', title: 'JavaScript', color: '#F7DF1E' },
  { class: 'fab fa-react', title: 'ReactJS', color: '#61DAFB' },
  { class: 'fab fa-node-js', title: 'NodeJS', color: '#339933' },
  { class: 'fas fa-database', title: 'MongoDB', color: '#47A248' },
  { class: 'fas fa-database', title: 'MySQL', color: '#4479A1' },
  { class: 'fab fa-html5', title: 'HTML5', color: '#E34F26' },
  { class: 'fab fa-css3-alt', title: 'CSS3', color: '#1572B6' },
  { class: 'fab fa-bootstrap', title: 'Bootstrap', color: '#7952B3' },
  { class: 'fab fa-github', title: 'GitHub', color: '#181717' },
  { class: 'fas fa-layer-group', title: 'Material-UI', color: '#007FFF' }, 
  { class: 'fab fa-laravel', title: 'Laravel', color: '#FF2D20' }         
];

  const workflows = [
    'Git, GitHub cho làm việc nhóm',
    'Thiết kế web responsive',
    'Phát triển theo mô hình Agile & Scrum',
    'Tôn chỉ: "Học điều mới mỗi ngày, không sao chép ngày hôm qua!"',
  ];

  return (
    <Box id="skills" component="section" sx={{ py: 5 }}>
      <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
        Kỹ năng
      </Typography>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
          Ngôn ngữ lập trình & Công cụ
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {techIcons.map((icon, index) => (
            <Grid item key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <i className={icon.class} style={{ fontSize: '36px', color: icon.color }}  title={icon.title} />
                <Typography variant="body2">{icon.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
          Quy trình làm việc
        </Typography>
        <List>
          {workflows.map((workflow, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'secondary.main' }} />
              </ListItemIcon>
              <ListItemText primary={workflow} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Skills;