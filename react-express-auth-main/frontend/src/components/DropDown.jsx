import { useState, useContext } from "react";
// import './CreatePost.css'

export default function Dropdown({ materialName, materialId }) {

	const [materials, setMaterials] = useState([]);
	// const [selectedMaterial, setSelectedMaterial] = useState(materialName);

	const  handleDropdownChange = (event) => {
		const value = event.target.value;
		setMaterials(value);
	};

return  (
	<div >
		<label id="dropdown">
				 <select style={{ width: '400px', height: '80px', borderRadius: '25px', textAlign: 'center', fontSize:'13px'}} onChange={handleDropdownChange}>
				<option  value={materialId}>Milk Carton</option>
				<option  value={materialId}>Jeans</option>
				<option  value={materialId}>Mason Jars</option>
                <option  value={materialId}>NewsPaper/Magazine</option>
                <option  value={materialId}>Fabric Scraps</option>
                <option  value={materialId}>Cans</option>
				<option value={materialId}>Yogurt Cups</option>
				<option value={materialId}>Records</option>
				<option value={materialId}>Pens</option>
				<option value={materialId}>Crayons</option>
				<option value={materialId}>Candles</option>
				<option value={materialId}>Cups</option>
				<option value={materialId}>Ribbons/Ties</option>
				<option value={materialId}>Glass Bottles</option>
				<option value={materialId}>Cardboard</option>
				<option value={materialId}>Plastic Bags</option>
                <option  value="Other">Other</option>
			</select>
		</label>
	</div>
	);
}