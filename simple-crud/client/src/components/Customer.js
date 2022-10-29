import React from 'react';
import "./Customer.css";
import { useState } from 'react';
import Axios from 'axios';

  
function Customer(){

	 const [name, setName] = useState("");
	 const [item, setItem] = useState("");
	 const [quant, setQuant] = useState(0);

	 const displayInfo = () => { console.log(name + item + quant); };



	 const addOrder = () => {
		Axios.post('http://localhost:3000/create', {name: name, item: item, quant: quant,}).then(() => { console.log("success"); });
		};

	 return(
	 <div> 
	  
	  <div className="Title">
	 	<h1 className="PageTitle">Place an order:</h1>
		</div>
		<div className="order_page">
		 <div className="order_col">
		 	<h2 className="pageText">Enter your order info here:</h2>
	 		<label>Name:</label>
	 		<input type ="text" onChange={(event) => { setName(event.target.value)}} />
	 		<label>Item:</label>
	 		<input type="text" onChange={(event) => { setItem(event.target.value)}} />
	 		<label>Quantity:</label>
	 		<input type="number" onChange={(event) => { setQuant(event.target.value)}}/>
			<button onClick={addOrder}>Submit Order</button>

		</div>

		<div className="order_col">
		<h2 className = "pageText">Our menu:</h2>
		</div>


		</div>

	 </div>

	 )

}
  
export default Customer;
