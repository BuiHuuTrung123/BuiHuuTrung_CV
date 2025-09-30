import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Link, Chip } from '@mui/material';

function Projects() {
  const projects = [
    {
      title: 'Trello-web',
      description: 'Nền tảng hỗ trợ sắp xếp lịch trình hàng ngày',
      link: 'https://podfoods.co/',
      tags: ['ReactJS', 'Node.Js'],
    },
   
  ];

  return (
    <Box id="projects" component="section" sx={{ py: 5 }}>
      <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
        Dự án
      </Typography>
      <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
        Một số dự án nổi bật của tôi:
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5">
                  <Link href={project.link} target="_blank" rel="noreferrer" color="primary">
                    {project.title} <i className="fas fa-external-link-alt" style={{ fontSize: '12px' }} />
                  </Link>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>{project.description}</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {project.tags.map((tag, i) => (
                    <Chip key={i} label={tag} size="small" color="primary" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;