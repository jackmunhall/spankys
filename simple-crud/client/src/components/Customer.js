import "./Customer.css";
import { useState } from 'react';
import Axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';


  
function Customer(){

	 const [nickname, setNickname] = useState("");
	 const [item, setItem] = useState("");
	 const [qty, setQty] = useState(0);
	

	 const displayInfo = () => { console.log(nickname + item + qty); };

	 const [newItem, setNewItem] = useState("");
	 const [newQty, setNewQty] = useState(0);

	 const [orderList, setOrderList] = useState([]);

	 const current = new Date();
     const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

	 const navigate = useNavigate();
	 const navigateHome = () => {
		navigate ('/');
    }


	 const addOrder = () => {
		Axios.post('http://localhost:3001/create', {
			 nickname: nickname, 
			 item: item, 
			 qty: qty, 
			 }).then(() => { 
				  setOrderList([
				  		...orderList, 
						{
							 nickname: nickname,
							 item: item,
							 qty: qty,
							 date: date,

						},
					]);
			 });
		};

		const getOrders = () => {
			 Axios.get("http://localhost:3001/orders").then((response) => {
				
				  setOrderList(response.data);
			 });

		};



		const updateOrderItem = (id) => {
			 Axios.put("http://localhost:3001/update", {item: newItem, id: id }).then(
			 (response) => {
				  setOrderList(
				  	orderList.map((val) => {
						 return val.id == id
						 ? {
							  id: val.id,
							  nickname: val.nickname,
							  item: val.item,
							  qty: val.qty,
							  date: val.date,
							 }

							: val;
						})
					);
				 }
				);
		};


		const updateOrderQty = (id) => {
			 Axios.put("http://localhost:3001/updateq", {qty: newQty, id: id}).then(
			 (response) => {
				  setOrderList(
				  	orderList.map((val) => {
						 return val.id == id
						 ? {
							  id: val.id,
							  nickname: val.nickname,
							  item: val.item,
							  qty: val.qty,
							  date: val.date,
						 }

						 : val;
					})
				);
			}
		);
	};







		const deleteOrder = (id) => {
			 Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
				  setOrderList(
				  	orderList.filter((val) => {
						 return val.id !== id;
					})
				);
			});
		};


	 return(
	 <div> 
	  <Button onClick={navigateHome} sx={{ color: 'black', backgroundColor: 'orange', borderColor: 'orange' }}>Back to home</Button>
	  <div className="Title">
	 	<h1 className="PageTitle">Place an order:</h1>
		</div>
		<div className="order_page">
		 <div className="order_col">
		 	<h2 className="pageText">Enter your order info here:</h2>
	 		<label>Name:</label>
	 		<input type ="text" onChange={(event) => { setNickname(event.target.value); }} />
	 		<label>Item:</label>
	 		<input type="text" onChange={(event) => { setItem(event.target.value); }} />
	 		<label>Quantity:</label>
	 		<input type="number" onChange={(event) => { setQty(event.target.value); }}/>
			<Button onClick={addOrder} sx={{ color: 'black', backgroundColor: 'orange', borderColor: 'orange' }}>Submit Order</Button>

        
			  

		 

        {orderList.map((val, key) => {
          return (
            <div className="order"> 
              <div>
                <h3>Nickname: {val.nickname}</h3>
                <h3>Item: {val.item}</h3>
                <h3>Qty: {val.qty}</h3>
                <h3>Order_Date: {val.date}</h3>
              </div>
              <div>
               
       
              </div>
            </div>
          );
        })}
      </div>

		</div>

	 </div>

	 )

}
  
export default Customer;
