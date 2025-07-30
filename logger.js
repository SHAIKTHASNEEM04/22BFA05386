export function logAction(actionType, shortcode, longURL) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ACTION: ${actionType}`);
  console.log(`  • Shortcode: ${shortcode}`);
  console.log(`  • Original URL: ${longURL}`);
}
