import { useState, useContext } from "react";
import { getAllMaterials } from "../adapters/materials-adapter";

export default function Dropdown() {
	const [selectedOption, setSelectedOption] = useState("Materials");

	const  handleDropdownChange = (event) => {
		const seletedMaterilasId = event.target.value;
		setSelectedOption(seletedMaterilasId);
	};

return  (
	<div>
		<label>
			<h3>Choose Your Repurposed Materials:</h3>
				 <select onChange={handleDropdownChange}>
				<option  value="Milk Carton">Milk Carton</option>
				<option  value="Jeans">Jeans</option>
				<option  value="Mason Jars">Mason Jars</option>
                <option  value="NewsPaper/Magazine">NewsPaper/Magazine</option>
                <option  value="Fabric Scraps">Fabric Scraps</option>
                <option  value="Cans">Cans</option>
                <option  value="Other">Other</option>
			</select>
		</label>
		// <p>Selected Material: {selectedOption}</p>
	</div>
	);
}