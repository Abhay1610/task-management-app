// pages/logout.js
// import { logout } from '../utils/auth'; // Import logout function

export const handleLogout = (router, setAuthState) => {
  logout(); // Call logout function
  setAuthState(null); // Clear auth state
  router.push('/login'); // Redirect to login page
};


// Add a button to log out
<button onClick={handleLogout}>Logout</button>
