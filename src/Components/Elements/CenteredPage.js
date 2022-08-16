import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function CenteredPage({ children, ...props }) {
  return (
    <Container maxWidth="md">
      <Grid
        props
        container
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center", mt: 4 }}
      >
        {children}
      </Grid>
    </Container>
  );
}
