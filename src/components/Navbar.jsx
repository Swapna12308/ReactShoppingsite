// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../pages/Home.css';
// const Navbar = ({ cartCount, onCartClick }) => {
//   const Navbar = ({ cartCount, onCartClick }) => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert('Logged out successfully');
//       navigate('/login');
//     } catch (err) {
//       alert(err.message);
//     }
//   }
//   };
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">🛒 Fashion city</div>
//       <button className="cart-button" onClick={onCartClick}>
//         View Cart ({cartCount})
//       </button>
//     </nav>
      
//   );
//   };
// export default Navbar


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import '../pages/Home.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">🛒 Fashion City</div>
        {user && (
          <div className="user-name" style={{ marginLeft: '20px', fontSize: '14px' }}>
            👋 Welcome, {user.displayName || user.email}
          </div>
        )}
      </div>
      <div className="navbar-right">
        <button className="cart-button" onClick={onCartClick}>
          View Cart ({cartCount})
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
