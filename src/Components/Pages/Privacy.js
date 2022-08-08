import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import useFetch from "../../Hooks/useFetch";
import CenteredPage from "../Elements/CenteredPage";

const privacyPageUrl = "https://crystalmesh.de/wp-json/wp/v2/pages/3";
const impressumbody = `CrystalMesh UG (haftungsbeschränkt)
Ehranger Str. 3-5
54293 Trier
Germany

contact(at)crystalmesh.de
  
Amtsgericht Wittlich HRB 44948
UstID: DE328603530 
Geschäftsführung: David Stephan Liebemann, Vanessa Barth`;

export default function Privacy() {
  const privacyPage = useFetch(privacyPageUrl);

  return (
    <Container sx={{ mt: 2, px: 4 }} maxWidth="md">
      <Typography variant="h2" paragraph align="center">
        Impressum
      </Typography>
      <Typography style={{ whiteSpace: "pre-wrap" }} paragraph>
        {impressumbody}
      </Typography>
      <Typography variant="h2" paragraph align="center">
        Privacy Policy
      </Typography>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: privacyPage?.content.rendered }}
      ></Typography>
    </Container>
  );
}
