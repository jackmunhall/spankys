import "./Customer.css";
import { useState } from 'react';
import Axios from 'axios';

  
function Customer(){

	 const [nickname, setNickname] = useState("");
	 const [item, setItem] = useState("");
	 const [qty, setQty] = useState(0);

	 const displayInfo = () => { console.log(nickname + item + qty); };

	 const [newItem, setNewItem] = useState("");

	 const [orderList, setOrderList] = useState([]);



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
						 return val.id = id
						 ? {
							  id: val.id,
							  nickname: val.nickname,
							  item: val.item,
							  qty: val.qty,
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
						 return val.id != id;
					})
				);
			});
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
	 		<input type ="text" onChange={(event) => { setNickname(event.target.value); }} />
	 		<label>Item:</label>
	 		<input type="text" onChange={(event) => { setItem(event.target.value); }} />
	 		<label>Quantity:</label>
	 		<input type="number" onChange={(event) => { setQty(event.target.value); }}/>
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
