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
import ImageCard from "../Elements/ImageCard";
import YoutubeVideo from "../Elements/YoutubeVideo";

export default function Home() {
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
      <YoutubeVideo src="https://www.youtube-nocookie.com/embed/4xodFD_esck"
        title="The Last Premiere Trailer"
        alt="The Last Premiere Trailer"/>
     
      <Grid container spacing={2} justifyContent="center" sx={{mt:2}}>
        <Grid item>
          <ImageCard></ImageCard>
        </Grid>
        <Grid item>
          <ImageCard></ImageCard>
        </Grid>
        <Grid item>
          <ImageCard></ImageCard>
        </Grid>
        <Grid item>
          <ImageCard></ImageCard>
        </Grid>
      </Grid>
    </CenteredPage>
  );
}
