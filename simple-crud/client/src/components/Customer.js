import React from 'react';
import "./Customer.css";
  
function Customer(){
    return(
	 <div> 
	  
	  <div className="Title">
	 	<h1 className="PageTitle">Place an order:</h1>
		</div>
		<div className="order_page">
		 <div className="order_col">
		 	<h2 className="pageText">Enter your order info here:</h2>
	 		<label>Name:</label>
	 		<input type ="text" />
	 		<label>Item:</label>
	 		<input type="text" />
	 		<label>Quantity:</label>
	 		<input type="number" />
			<button>Submit Order</button>

		</div>

		<div className="order_col">
		<h2 className = "pageText">Our menu:</h2>
		</div>


		</div>

	 </div>

	 )

}
  
export default Customer;
