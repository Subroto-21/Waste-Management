import Signin from './Components/signin'
import axios from 'axios';
import { useState } from 'react';
import './App.css'


const initialState = {
  email: "",
  password: "",
  Cpassword: "",
  location: "",
};




function App() {


  const [formData, setFormData] = useState(initialState);
  const [location, setLocation] = useState(null);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };


  const signin = (formData, navigate) => {
    try {      
      api.signIn(formData)
        .then((res) => {
          const response = res.data;
          localStorage.setItem("profile", JSON.stringify({ response }));
        });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const API = axios.create({ baseURL: "http://localhost:1300" });
    
    // if (isSignup) {         
    //   signup(formData, navigate); // send input data in the database. navigate to navigate once something happens
    // } else {
    //   signin(formData, navigate);
    // }
  };



  const getlocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const coordinates = position.coords;
      console.log(coordinates);
      const latitude = coordinates.latitude;
      const longitude = coordinates.longitude;
      const url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`

      const data = async () => {
        const res = await axios.get(url);
        name = res.data.display_name;

        setLocation(() => {
          location = res.data.display_name
        })
        console.log(res.data.display_name);
      }

      data();

    })
  }




  return (
    <>
      <div class="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div class="input-box">
            <input onChange={handleChange} type="email" placeholder="Enter email" name='email' required />
          </div>
          {/* <div class="input-box">
            <input type="text" placeholder="Enter your email" required/>
          </div> */}
          <div class="input-box">
            <input onChange={handleChange} type="password" placeholder="Create password" name='password' required />
          </div>
          <div class="input-box">
            <input onChange={handleChange} type="password" placeholder="Confirm password" name='Cpassword' required />
          </div>
          <div class="input-box">
            <input onChange={handleChange} onClick={getlocation} type="password" placeholder="locationn" required name='location' />
          </div>
          <div class="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div class="input-box button">
            <input type="Submit" value="Register Now" />
          </div>
          <div class="text">
            <h3>Already have an account? <a href="#">Login now</a></h3>
          </div>
        </form>
      </div>
      <Signin />
    </>
  )
}

export default App;

















