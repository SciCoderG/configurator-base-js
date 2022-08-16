import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

export class ImageCardData {
  constructor(title, description, src, alt, link) {
    this.title = title;
    this.description = description;
    this.src = src;
    this.alt = alt;
    this.link = link;
  }
}

export default function ImageCard({ data }) {
  const { link, title, alt, src, description } = data;
  return (
    <Card sx={{ height: "100%" }}>
      <CardActionArea
        href={link}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardMedia component="img" image={src} alt={alt} />
        <CardContent
          sx={{
            flexGrow: 1,
            textAlign: "left",
            mx: 2,
            display: "grid",
            gridTemplateRows: "auto auto 1fr",
            alignSelf:"flex-start"
          }}
        >
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            sx={{ alignSelf: "flex-end" }}
          >
            Learn More
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
