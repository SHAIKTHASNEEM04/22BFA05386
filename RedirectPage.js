import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getURL } from "../dataStore";

function RedirectPage() {
  const { shortcode } = useParams();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const longURL = getURL(shortcode);
    if (longURL) {
      window.location.href = longURL;
    } else {
      setNotFound(true);
    }
  }, [shortcode]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {notFound ? (
        <h2>Short URL not found or expired.</h2>
      ) : (
        <h2>Redirecting...</h2>
      )}
    </div>
  );
}

export default RedirectPage;
