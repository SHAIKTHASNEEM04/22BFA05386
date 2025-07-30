import React from "react";
import URLForm from "../components/URLForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function ShortenerPage() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom align="center">
        URL Shortener
      </Typography>
      <URLForm />
    </Container>
  );
}

export default ShortenerPage;
