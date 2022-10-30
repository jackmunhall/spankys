import React from 'react';
import logo from '../assets/Spankys.png'
import Button from '@mui/material/Button';
import './Home.css'
import Typography from '@mui/material/Typography';
import {Routes, Route, useNavigate} from 'react-router-dom';

  
function Home(){

	const navigate = useNavigate();

	const navigateToCustomer = () => {
		 navigate('/Customer');
	}

	const navigateEmployee =() => {
		 navigate('/employee');
	}


    return (
        <div className="home">
            <img src={logo} alt="spanky's logo" className="logo"></img>
            <Typography variant="h4">I am a ...</Typography>
            <div className="choices">
                <Button onClick={navigateToCustomer}>Customer</Button>
                <Button onClick={navigateEmployee}>Employee</Button>
            </div>
        </div>
    );
}
  
export default Home;
