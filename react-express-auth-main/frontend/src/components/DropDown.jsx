export default function Dropdown()  {
	const [selectedOption, setSelectedOption] = useState("Materials");

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};

return  (
	<div>
		<label>
			Select an option:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="Milk Carton">Milk Carton</option>
				<option  value="Jeans">Jeans</option>
				<option  value="Mason Jars">Mason Jars</option>
                <option  value="NewsPaper/Magazine">NewsPaper/Magazine</option>
                <option  value="Fabric Scraps">Fabric Scraps</option>
                <option  value="Cans">Cans</option>
                <option  value="Other">Other</option>
			</select>
		</label>
		<p>Selected option: {selectedOption}</p>
	</div>
	);
}