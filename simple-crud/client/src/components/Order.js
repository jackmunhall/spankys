import React from 'react';

import Button from '@mui/material/Button' 
import "./Order.css";
import { useState } from 'react';
import Axios from 'axios';

  
function Order(){

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
	 	<h1 className="PageTitle">Manage orders:</h1>
		</div>
		<div className="order_page">
		
	<div className="choices">
	 <Button onClick={getOrders}  variant='outlined'
  				sx={{ color: 'black', backgroundColor: 'orange', borderColor: 'orange', minWidth: '30%', padding: '30px', margin: '20px'}}>Show Orders</Button>
			  

		 

        {orderList.map((val, key) => {
          return (
            <div className="order"> 
              <div className="data">

				  	<div className="col">
                <h3 className="field-name">Nickname:</h3>
					 <h3 className="field"> {val.nickname}</h3>
					</div>
					<div className="col">
                <h3 className="field-name">Item:</h3>
					 <h3 className="field"> {val.item}</h3>
					 </div>
					 <div className="col">
                <h3 className="field-name">Qty:</h3>
					 <h3 className="field"> {val.qty}</h3>
					 </div>
					 <div className="col">
                <h3 className="field-name">Order_Date:</h3>
					 <h3 className="field"> {val.date}</h3>
					 </div>
					 <div className="col">
                <h3 className="field-name">ID:</h3>
					 <h3 className="field"> {val.id}</h3>
					 </div>
					 
              </div>
              <div className="choices">
                <input
                  type="text"
                  placeholder="Update item here"
                  onChange={(event) => {
                    setNewItem(event.target.value);
                  }}

 />
                <Button
                  onClick={() => {
                    updateOrderItem(val.id);
                  }}
                  variant='outlined'
  				sx={{ color: 'black', backgroundColor: 'orange', borderColor: 'orange', minWidth: '30%', padding: '10px', margin: '10px'}}>
                  {" "}
                  Update item
                </Button>


					 <input
					  type="number"
					  placeholder="Update quantity here"
					  onChange={(event) => {
							setNewQty(event.target.value);
						}}
						/>

						<Button
						 onClick={() => {
							  updateOrderQty(val.id);
							}}  variant='outlined'
  				sx={{ color: 'black', backgroundColor: 'orange', borderColor: 'orange', minWidth: '30%', padding: '10px', margin: '10px'}}
						>
						{" "}
						Update quantity
						</Button>

                <Button
                  onClick={() => {
                    deleteOrder(val.id);
                  }}
                 variant='outlined'
  				sx={{ color: 'black', backgroundColor: 'orange', borderColor: 'orange', minWidth: '30%', padding: '20px', margin: '10px'}}>
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>

		</div>

	 </div>

	 )

}
  
export default Order;

