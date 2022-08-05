import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function LandingPage() {
  return (
    <Container maxWidth="md">
      <Grid container alignItems="center" justifyContent="center" sx={{textAlign:"center"}}>
        <Typography variant="h1" gutterBottom>
          CrystalMesh
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
          CrystalMesh is an independent game studio based in Trier, Germany. We
          specialize on the development of Augmented Reality and Virtual Reality
          applications for clients, using Unity and the Unreal Engine. We are
          currently developing our third person action adventure game “The Last
          Premiere” with federal funding.
        </Typography>
        <iframe
          width="90%"
          height="400px"
          origin={window.location.origin}
          src="https://www.youtube-nocookie.com/embed/4xodFD_esck"
          title="The Last Premiere Trailer"
          alt="The Last Premiere Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Grid>
    </Container>
  );
}
