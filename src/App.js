import React from 'react';
import "./App.css"
import { Route,BrowserRouter,Routes} from "react-router-dom";
import Home from './home';
import Profile from './Components/profile/profile'
import Signup from './Components/signup/signup';
import SignupSuccess from './Components/signup/signupSuccess';
import RaiseRequest from './Components/raiseRequest';
import DonorForm from './Components/forms/donorForm';
import ReceiverForm from './Components/forms/receiverForm';
import CelebrityForm from "./Components/forms/celebrityForm";
import NgoRegistration from "./Components/forms/ngoRegistrationForm"
import CompanyForm from "./Components/forms/companyForm"
import SchoolForm from "./Components/forms/schoolForm"
import CollegeForm from "./Components/forms/collegeForm"
import HospitalForm from "./Components/forms/hospitalForm"
import PoliticalPartyForm from "./Components/forms/politicalPartyForm"
import OcassionalDonorForm from './Components/forms/ocassionalDonorForm';
import MyDonationTypes from './Components/myDonationTypes';
import DonationHistory from './Components/donationHistory';
import ReceivingHistory from './Components/receivingHistory'
import ReferalDonationHistory from './Components/referalDonationHistory';
import ReferalDonors from './Components/referalDonors';
import ESevaCard from './Components/eSevaCard';
import LiveRequests from './Components/liveRequests';
import RequestDetails from './Components/requestDetails';
import RequestAccepted from './Components/requestAccepted';

const App = () =>(
  <>
  <BrowserRouter>
    <Routes id="routes">
      <Route path="/" element={<Home/>}/>
      <Route path="/CelebrityForm" element={<CelebrityForm/>}/>
      <Route path ="/RaiseRequest" element={<RaiseRequest/>}/>
      <Route path ="/NgoForm" element={<NgoRegistration/>}/>
      <Route path ="/DonorForm" element={<DonorForm/>}/>
      <Route path ="/OcassionalDonorForm" element={<OcassionalDonorForm/>}/>
      <Route path ="/PoliticalPartyForm" element={<PoliticalPartyForm/>}/>
      <Route path ="/SchoolForm" element={<SchoolForm/>}/>
      <Route path ="/HospitalForm" element={<HospitalForm/>}/>
      <Route path ="/CollegeForm" element={<CollegeForm/>}/>
      <Route path="/CompanyForm" element={<CompanyForm/>}/>
      <Route path ="/ReceiverForm" element={<ReceiverForm/>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path ="/Signup" element={<Signup/>}/>
      <Route path ="/ESevaCard" element={<ESevaCard/>}/>
      <Route path ="/ReferalDonors" element={<ReferalDonors/>}/>
      <Route path ="/ReferalDonationHistory" element={<ReferalDonationHistory/>}/>
      <Route path ="/DonationHistory" element={<DonationHistory/>}/>
      <Route path ="/ReceivingHistory" element={<ReceivingHistory/>}/>
      <Route path="/MyDonationTypes" element={<MyDonationTypes/>}/>
      <Route path="/SignupSuccess" element={<SignupSuccess/>}/>
      <Route path="/LiveRequest" element={<LiveRequests/>}/>
      <Route path="/RequestDetails" element={<RequestDetails/>}/>
      <Route path="/RequestAccepted" element={<RequestAccepted/>}/>
      </Routes>
  </BrowserRouter>
  </>
)
export default App;
