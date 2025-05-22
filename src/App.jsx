// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Cart from './pages/Cart';

// const App = () => {
//   return (
//     <div>


//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Signup from './pages/Signup';
// import Login from './pages/Login';

// const App = () => {
//   return (
//     <div>


//       <Routes>
//                 <Route path="/Login" element={<Login/>} />
//                 <Route path="/" element={<Signup/>} />
//                  <Route path="/home" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './firebase';
import './login.css';
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        
        {/* 🔒 Protected Routes */}
        <Route
          path="/home"
          element={
            user ? <Home /> : <LoginRedirect />
          }
        />
        <Route
          path="/cart"
          element={
            user ? <Cart /> : <LoginRedirect />
          }
        />
      </Routes>
    </div>
  );
};

// 🔁 Redirect helper component
const LoginRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, [navigate]);
  return null;
};

export default App;
