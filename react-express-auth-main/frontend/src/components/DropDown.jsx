import { useState } from "react";

export default function Dropdown({formData, setFormData}) {

    const handleDropdownChange = (event) => {
        const value = +event.target.value;
        setFormData({ ...formData, ['materialId']: value });
    };

    return (
        <div>
            <label id="dropdown">
                <select
                    style={{ width: '400px', height: '80px', borderRadius: '25px', textAlign: 'center', fontSize: '13px' }}
                    onChange={handleDropdownChange}
                >
                    <option value={1}>Milk Carton</option>
                    <option value={2}>Jeans</option>
                    <option value={3}>Mason Jars</option>
                    <option value={4}>NewsPaper/Magazine</option>
                    <option value={5}>Fabric Scraps</option>
                    <option value={6}>Cans</option>
                    <option value={7}>Yogurt Cups</option>
                    <option value={8}>Records</option>
                    <option value={9}>Pens</option>
                    <option value={10}>Crayons</option>
                    <option value={11}>Candles</option>
                    <option value={12}>Cups</option>
                    <option value={13}>Ribbons/Ties</option>
                    <option value={14}>Glass Bottles</option>
                    <option value={15}>Cardboard</option>
                    <option value={16}>Plastic Bags</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </div>
    );
}