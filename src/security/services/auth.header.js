// auth.header.js
// Helper function for generating Authorization header if available

export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}
