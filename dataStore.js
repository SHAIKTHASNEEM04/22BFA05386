// src/dataStore.js

// Save a URL
export function saveURL(shortcode, longURL, expiryDate) {
  const data = { longURL, expiryDate };
  localStorage.setItem(shortcode, JSON.stringify(data));
}

// Get a URL
export function getURL(shortcode) {
  const item = localStorage.getItem(shortcode);
  if (!item) return null;

  const data = JSON.parse(item);
  if (data.expiryDate) {
    const now = new Date();
    const expiry = new Date(data.expiryDate);
    if (now > expiry) {
      localStorage.removeItem(shortcode);
      return null;
    }
  }

  return data.longURL;
}

// Check if shortcode exists
export function checkShortcodeExists(shortcode) {
  return !!localStorage.getItem(shortcode);
}






