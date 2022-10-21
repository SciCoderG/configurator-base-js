import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CenteredPage from "../Elements/CenteredPage";
import ImageCard, { ImageCardData } from "../Elements/ImageCard";
import YoutubeVideo from "../Elements/YoutubeVideo";
import FullscreenSection from "../Elements/FullscreenSection";

const cards = [
  new ImageCardData(
    "AR/VR and Web 3.0",
    "Modern technologies make it possible to showcase your products in previously unkown ways.",
    "/vr.svg",
    "",
    "/xr-development"
  ),
  new ImageCardData(
    "Unity Consultation",
    "Need help adding a complex feature or don't know how to solve a problem? Let us help you with your Unity project.",
    "/vr.svg",
    "",
    "/consultation"
  ),
  new ImageCardData(
    "3D Modeling",
    "3D Model creation for digital environments and 3D characters modeling and animations.",
    "/vr.svg",
    "",
    "/modeling"
  ),
  new ImageCardData(
    "Music",
    "Let us create customized, immersive music for your app or game.",
    "/vr.svg",
    "",
    "/music"
  ),
];

export default function Home() {
  const services = cards.map((card) => {
    return (
      <Grid item key={card.title} xs={12} sm={6} lg={3}>
        <ImageCard data={card} />
      </Grid>
    );
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center" }}
        rowSpacing={4}
      >
        <FullscreenSection>
          <Grid container>
            <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
              <Typography variant="h1" gutterBottom>
                Crafting Experiences
              </Typography>
              <Typography variant="h5" gutterBottom>
                Leverage cutting-edge technology to create mind blowing,
                realtime applications and games.
              </Typography>
            </Grid>
          </Grid>
        </FullscreenSection>

        <FullscreenSection>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ mb: 4 }}>
              We create AR/VR apps, design games and craft 3D models, tailored
              for your needs - this is how we support you.
            </Typography>
          </Grid>

          <Grid container spacing={2} alignItems="stretch" direction="row">
            {services}
          </Grid>
        </FullscreenSection>

        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            CrystalMesh
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            CrystalMesh is an independent game studio based in Trier, Germany.
            We specialize on the development of Augmented Reality and Virtual
            Reality applications for clients, using Unity and the Unreal Engine.
            We are currently developing our third person action adventure game
            “The Last Premiere” with federal funding.
          </Typography>

          {/* <YoutubeVideo
            src="https://www.youtube-nocookie.com/embed/4xodFD_esck"
            title="The Last Premiere Trailer"
            alt="The Last Premiere Trailer"
          /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
