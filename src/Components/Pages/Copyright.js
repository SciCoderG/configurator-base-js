import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
  return (

    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      gutterBottom
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        CrystalMesh
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
