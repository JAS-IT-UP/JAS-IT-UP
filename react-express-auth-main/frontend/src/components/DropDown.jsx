import { useState, useContext } from "react";

export default function Dropdown({ materialName, materialId }) {

	const [materials, setMaterials] = useState([]);
	const [selectedMaterial, setSelectedMaterial] = useState(materialName);

	const  handleDropdownChange = (event) => {
		const value = event.target.value;
		setMaterials(value);
	};

return  (
	<div>
		<label>
			<h3>Choose Your Repurposed Materials:</h3>
				 <select onChange={handleDropdownChange}>
				<option  value={materialId}>Milk Carton</option>
				<option  value={materialId}>Jeans</option>
				<option  value={materialId}>Mason Jars</option>
                <option  value={materialId}>NewsPaper/Magazine</option>
                <option  value={materialId}>Fabric Scraps</option>
                <option  value={materialId}>Cans</option>
                <option  value="Other">Other</option>
			</select>
		</label>
		<p>Selected Material: {materialName}</p>
	</div>
	);

// return  (
// 	<div>
// 	<label>
// 		<h3>Choose Your Repurposed Materials:</h3>
// 		<select onChange={handleDropdownChange} value={selectedMaterial}>
// 			<option value="">Select a material</option>
// 			{materials.map((material) => (
// 				<option key={materialId} value={material.id}>
// 					{material.materialName}
// 				</option>
// 			))}
// 		</select>
// 	</label>
// 	<p>Selected Material: {selectedMaterial}</p>
// 	</div>
// 		);
}