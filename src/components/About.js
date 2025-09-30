import { Box, Typography, Link, Grid, IconButton, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

function About() {
  return (
    <Box id="about" component="section" sx={{ py: 5 }}>
      <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
        BUI HUU <span style={{ color: 'primary.main' }}>TRUNG</span>
      </Typography>
      <Typography variant="h6" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
        <i className="fa fa-address-card" />  Nhà phát triển web nhiệt huyết 

      </Typography>
      <Typography variant="h6" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
        <i className="fa fa-map" />Quận Hà Đông, Hà Nội, Việt Nam
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: 'primary.light', borderRadius: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Xin chào, chào mừng bạn đến với hồ sơ của tôi!
        </Typography>
        <Typography variant="body1">
          Tôi là Bùi Hữu Trung, sinh viên công nghệ thông tin năm cuối của trường đại học Công Nghệ Giao Thông Vận Tải với niềm đam mê lập trình Web. Tôi luôn tìm kiếm cơ hội để học hỏi, trau dồi kỹ năng và áp dụng công nghệ vào giải quyết các bài toán thực tế.
        </Typography>
        <Typography variant="body1">
          - Mục tiêu ngắn hạn: Tìm kiếm cơ hội thực tập/làm việc để phát triển kỹ năng Front-end & Back-end.

        </Typography>
        <Typography>- Mục tiêu dài hạn: Trở thành một lập trình viên Full-stack, đóng góp vào những sản phẩm chất lượng và hữu ích cho cộng đồng.</Typography>
      </Paper>
      <Typography variant="h6" sx={{ mb: 2 }}>
        <strong><i className="fab fa-react" style={{ color: '#47CEF6' }} /> Front-end:</strong> ReactJS (Hook,
        Redux), Material UI, Axios.
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        <strong><i className="fab fa-node-js" style={{ color: '#88C048' }} /> Back-end:</strong> Node.JS,
        ExpressJS, MongoDB, MySQL.
      </Typography>
      <Grid container spacing={1} sx={{ mb: 2 }}>
        <Grid item>
          <Typography variant="body1">
            <i className="fa fa-envelope" style={{ color: '#F72926' }} />{' '}
            <Link href="mailto:trungbuimanifest@gmail.com" color="primary">
              trungbuimanifest@gmail.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <IconButton href="https://www.linkedin.com/in/trungquandev" target="_blank" rel="noreferrer" sx={{ '&:hover': { color: 'primary.main' } }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/BuiHuuTrung123" target="_blank" rel="noreferrer" sx={{ '&:hover': { color: 'primary.main' } }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.facebook.com/trung.bui.145303/" target="_blank" rel="noreferrer" sx={{ '&:hover': { color: 'primary.main' } }}>
          <FacebookIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
        "Đến với lập trình vì niềm đam mê"
      </Typography>
    </Box>
  );
}

export default About;