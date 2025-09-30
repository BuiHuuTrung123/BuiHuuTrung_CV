import React from 'react';
import { Box, Typography, Link, Grid, Divider, Paper } from '@mui/material';

function Experience() {
  const experiences = [
    {
      company: 'Website Lap-top',
      role: 'Thành viên',
      period: '06/2025',
      link: 'https://github.com/chudinhtao/Web_Laptop.git',
      description: [
        'Phát triển website với PHP, Laravel, Tailwind.',
        'Đảm nhiệm chức năng quản lý sản phẩm.',
        'Lên kế hoạch công việc hàng tuần và phân công nhiệm vụ.',
        'Tổ chức họp đội nhóm, báo cáo công việc.',
        'Đề xuất giải pháp tối ưu hóa mã cho Front-end và Back-end.',
      ],
    },
    {
      company: 'Trello-web',
      role: 'Front-end & Back-end Developer',
      period: '8/2025 - hiện tại',
      link: 'https://podfoods.co/',
      description: [
        'Phát triển website với ReactJS, Node.js,Material UI và các công nghệ khác.',
        'Thích nghi tốt với thay đổi công nghệ, hoàn thành nhiệm vụ đúng hạn.',
        'Phân tích công việc, đặt câu hỏi để làm rõ yêu cầu.',
        'Duy trì code-style tốt.',
      ],
    },
  ];

  return (
    <Box id="experience" component="section" sx={{ py: 5 }}>
      <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
        Kinh nghiệm
      </Typography>
      {experiences.map((exp, index) => (
        <Paper key={index} elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2, '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.15)' } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                <Link href={exp.link} target="_blank" rel="noreferrer" color="primary">
                  {exp.company} <i className="fas fa-external-link-alt" style={{ fontSize: '14px' }} />
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>{exp.role}</Typography>
              {exp.description.map((item, i) => (
                <Typography key={i} variant="body1" sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <i className="fa fa-bookmark" style={{ color: 'secondary.main' }} /> {item}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
              <Typography variant="body1" color="primary">
                {exp.period}
              </Typography>
            </Grid>
          </Grid>
          {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
        </Paper>
      ))}
    </Box>
  );
}

export default Experience;