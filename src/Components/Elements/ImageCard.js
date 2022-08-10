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
  return (
    <Card>
      <CardActionArea href={data.link}>
        <CardHeader color="primary" title={data.title} />

        <CardMedia
          component="img"
          height="140"
          image={data.src}
          alt={data.alt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
