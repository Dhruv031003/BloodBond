import React from 'react';
import Header from './Components/header/header'
import QuickLinks from './Components/quick-links/quickLinks'
import Map from './Components/custom-map/map'
import Footer from './Components/footer/footer'
import Strip from './Components/strip';
import SlideImage from "./Components/slideImage.js"
import PateintSlider from "./Components/patientSlider.js"
import MapOtions from "./Components/map-options/map-options.js"

var location;

const successCallback = (position) => {
    location=position;
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
navigator.geolocation.getCurrentPosition(successCallback,errorCallback)

const Home = () => {
    return(
    <>
        <Header loggedIn={true}/>
        <QuickLinks/>
        <Map location={location} zoomLevel={14} center={{lat:location.coords.latitude,lng:location.coords.longitude}}/>
        <MapOtions></MapOtions>
        <PateintSlider></PateintSlider>
        <Strip></Strip>
        <SlideImage></SlideImage>
        <Footer/>
    </>
    )
}
export default Home;