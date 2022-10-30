import "./Customer.css";
import { useState } from 'react';
import Axios from 'axios';

  
function Customer(){

	 const [nickname, setNickname] = useState("");
	 const [item, setItem] = useState("");
	 const [qty, setQty] = useState(0);

	 const displayInfo = () => { console.log(nickname + item + qty); };

	 const [newItem, setNewItem] = useState("");
	 const [newQty, setNewQty] = useState(0);

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
						 return val.id == id
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

        <button onClick={getOrders}>Show Orders</button>
			  

		 

        {orderList.map((val, key) => {
          return (
            <div className="order"> 
              <div>
                <h3>Nickname: {val.nickname}</h3>
                <h3>Item: {val.item}</h3>
                <h3>Qty: {val.qty}</h3>
                <h3>Order_Date: {val.date}</h3>
                <h3>ID: {val.id}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Update item here"
                  onChange={(event) => {
                    setNewItem(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateOrderItem(val.id);
                  }}
                >
                  {" "}
                  Update item
                </button>


					 <input
					  type="number"
					  placeholder="Update quantity here"
					  onChange={(event) => {
							setNewQty(event.target.value);
						}}
						/>

						<button
						 onClick={() => {
							  updateOrderQty(val.id);
							}}
						>
						{" "}
						Update quantity
						</button>

                <button
                  onClick={() => {
                    deleteOrder(val.id);
                  }}
                >
                  Delete
                </button>
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
