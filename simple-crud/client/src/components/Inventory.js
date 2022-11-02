import Axios from 'axios';
import React, { useEffect , useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Inventory(){
	const [inventoryList, setInventorylist] = useState([])

	useEffect(() => {
		console.log("loaded")
	})

	const getInventory = () => {
		Axios.get("http://localhost:3001/inventory").then((response) => {
			setInventorylist(response.data)
			console.log(inventoryList)
		})
	}

	return(
		<div>
			<h1 className="header">Inventory page</h1>
			<button onClick={getInventory}>Load Inventory</button>
			<div class="table">
				<TableContainer sx={{width:'80%',margin:'auto',border:'3px solid lightgray'}}component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Item</TableCell>
								<TableCell>Quantity</TableCell>
								<TableCell>Price</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{inventoryList.map((foodItem) => {
								return (
								<TableRow
									key = {foodItem.Item}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">{foodItem.Item}</TableCell>
									<TableCell>{foodItem.QuantityLeft}</TableCell>
									<TableCell>{foodItem.Price}</TableCell>
								</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	)

}

export default Inventory;

