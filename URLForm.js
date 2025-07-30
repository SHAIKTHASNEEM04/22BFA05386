import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { saveURL } from "../dataStore";
import { logAction } from "../middleware/logger";
import { useNavigate } from "react-router-dom";

const generateShortcode = () => {
  return Math.random().toString(36).substring(2, 8);
};

const URLForm = () => {
  const [longURL, setLongURL] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [expiry, setExpiry] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!longURL.trim()) {
      setError("Long URL is required.");
      return;
    }

    let code = shortcode.trim() || generateShortcode();

    const existing = localStorage.getItem(code);
    if (existing) {
      setError("Shortcode already exists. Try another.");
      return;
    }

    const data = {
      longURL,
      expiry,
    };

    saveURL(code, data);
    logAction("URL_SHORTENED", code, longURL);
    alert(`Shortened URL: ${window.location.origin}/${code}`);
    setLongURL("");
    setShortcode("");
    setExpiry("");
    navigate("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: "auto" }}>
      <TextField
        label="Enter Long URL *"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Custom Shortcode (optional)"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Expiry Date (optional, dd-mm-yyyy)"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
        Shorten URL
      </Button>
    </Box>
  );
};

export default URLForm;
