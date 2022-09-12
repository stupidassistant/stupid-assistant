import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Logo() {
  return (
    <Box mb={1} textAlign='center'>
      <Typography variant="h1" style={{
        fontFamily: "LogoFont",
        fontSize: 50,
        marginBottom: -10
      }}>{"STUPID"}</Typography>
      <Typography variant="h1" gutterBottom style={{
        fontFamily: "LogoFont",
        fontSize: 30,
        paddingBottom: 15
      }}>{"ASSISTANT"}</Typography>
    </Box>
  );
}