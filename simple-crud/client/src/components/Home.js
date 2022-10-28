import React from 'react';
import logo from '../assets/Spankys.png'
import Button from '@mui/material/Button';
import './Home.css'
import Typography from '@mui/material/Typography';
  
function Home(){
    return (
        <div class="home">
            <img src={logo} alt="spanky's logo" class="logo"></img>
            {/* <Typography variant="h4">I am a ...</Typography> */}
            <div class="choices">
                <Button sx={{backgroundColor: 'darkorange'}} variant="contained" >I am a customer</Button>
                <Button sx={{backgroundColor: 'darkorange'}} variant="contained">I am an employee</Button>
            </div>
        </div>
    );
}
  
export default Home;