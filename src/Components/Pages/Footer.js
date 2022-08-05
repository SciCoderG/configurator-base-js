import { Box, Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import Copyright from "./Copyright";
import "./Footer.css";

export default function Footer({ footers }) {
  return (
    <Box color="text.secondary" sx={{ mt: 3, mb: 1 }}>
      <Container maxwidth="lg" component="footer">
        <Grid container justifyContent="center" spacing={2}>
          {footers.map((footer) => (
            <Grid item key={footer.name}>
              <Link href={footer.link} color="inherit">
                {footer.name}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 1 }} />
      </Container>
    </Box>
  );
}
