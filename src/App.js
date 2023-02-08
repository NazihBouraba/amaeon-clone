import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise = loadStripe("pk_test_51MYM3hLuG8lt0yxGAyLIVPz10XReLP2gx9Ah4vtgaWqKuVyh2AGfNaJ3MjAWJSj0CIUOagiUToPt1ome7SCmX8cS00xLpm1cvd")

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
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
          <Route path="/orders" element={<><Header /><Orders /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<><Header /> <Elements stripe={promise}><Payment /></Elements></>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
