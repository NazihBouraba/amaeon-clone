import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("the user is >>>>", user)
      if (user) {
        // User is signed in, see docs for a list of available properties

        dispatch({
          type: "SET_USER",
          user: user
        })
        const uid = user.uid;
        // ...
      } else {
        // User is signed out

        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Routes >
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
