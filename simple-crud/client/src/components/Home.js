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
        <div class="home">
            <img src={logo} alt="spanky's logo" class="logo"></img>
            <Typography variant="h4">I am a ...</Typography>
            <div class="choices">
                <Button onClick={navigateToCustomer}>Customer</Button>
                <Button onClick={navigateEmployee}>Employee</Button>
            </div>
        </div>
    );
}
  
export default Home;
