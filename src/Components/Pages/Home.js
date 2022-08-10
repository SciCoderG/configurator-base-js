import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import CenteredPage from "../Elements/CenteredPage";
import ImageCard, { ImageCardData } from "../Elements/ImageCard";
import YoutubeVideo from "../Elements/YoutubeVideo";

const cards = [
  new ImageCardData(
    "Modelling",
    "3D Model creation for digital environments",
    "",
    "Image displaying 3d modelling",
    "/services/modelling"
  ),
  new ImageCardData(
    "Modelling",
    "3D Model creation for digital environments",
    "",
    "Image displaying 3d modelling",
    "/services/modelling"
  ),
  new ImageCardData(
    "Modelling",
    "3D Model creation for digital environments",
    "",
    "Image displaying 3d modelling",
    "/services/modelling"
  ),
  new ImageCardData(
    "Modelling",
    "3D Model creation for digital environments",
    "",
    "Image displaying 3d modelling",
    "/services/modelling"
  ),
];

export default function Home() {
  const services = cards.map((card) => {
    return (
      <Grid item key={card.title} xs={12} sm={6}>
        <ImageCard data={card} />
      </Grid>
    );
  });

  return (
    <CenteredPage>
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

      <Grid item width="100%">
        <YoutubeVideo
          src="https://www.youtube-nocookie.com/embed/4xodFD_esck"
          title="The Last Premiere Trailer"
          alt="The Last Premiere Trailer"
        />
      </Grid>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {services}
      </Grid>
    </CenteredPage>
  );
}
