import { CardMedia, Typography } from "@mui/material";
import FullscreenContainer from "../FullscreenContainer";
import FullscreenSection from "../FullscreenSection";

export default function LandingPage() {
  return (
    <FullscreenContainer>
      <FullscreenSection>
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
        {/* <iframe
          width="300"
          src="https://www.youtube-nocookie.com/embed/4xodFD_esck"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </FullscreenSection>
    </FullscreenContainer>
  );
}
