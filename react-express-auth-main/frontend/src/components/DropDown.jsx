import { useState } from "react";

export default function Dropdown({ materialName, materialId }) {
    const [selectedMaterial, setSelectedMaterial] = useState(materialName);

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setSelectedMaterial(value);
    };

    return (
        <div>
            <label id="dropdown">
                <select
                    style={{ width: '400px', height: '80px', borderRadius: '25px', textAlign: 'center', fontSize: '13px' }}
                    onChange={handleDropdownChange}
                    value={selectedMaterial} // Set the value of the select to the selectedMaterial state
                >
                    <option value="Milk Carton">Milk Carton</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Mason Jars">Mason Jars</option>
                    <option value="NewsPaper/Magazine">NewsPaper/Magazine</option>
                    <option value="Fabric Scraps">Fabric Scraps</option>
                    <option value="Cans">Cans</option>
                    <option value="Yogurt Cups">Yogurt Cups</option>
                    <option value="Records">Records</option>
                    <option value="Pens">Pens</option>
                    <option value="Crayons">Crayons</option>
                    <option value="Candles">Candles</option>
                    <option value="Cups">Cups</option>
                    <option value="Ribbons/Ties">Ribbons/Ties</option>
                    <option value="Glass Bottles">Glass Bottles</option>
                    <option value="Cardboard">Cardboard</option>
                    <option value="Plastic Bags">Plastic Bags</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </div>
    );
}