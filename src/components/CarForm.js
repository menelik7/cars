import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export default function CarForm() {
	const dispatch = useDispatch();

	const selectedName = (state) => state.form.name;
	const selectedCost = (state) => state.form.cost;

	const selectedCarProperties = createSelector(
		[selectedName, selectedCost],
		(name, cost) => {
			return { name, cost };
		}
	);

	const { name, cost } = useSelector(selectedCarProperties);

	const handleNameChange = (event) => {
		dispatch(changeName(event.target.value));
	};

	const handleCostChange = (event) => {
		const carCost = parseInt(event.target.value) || 0;
		dispatch(changeCost(carCost));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addCar({ name, cost }));
	};

	return (
		<div className="car-form panel">
			<h4 className="subtitle is-3">Add car</h4>
			<form onSubmit={handleSubmit}>
				<div className="field-group">
					<div className="field">
						<label className="label">Name</label>
						<input
							className="input is-expanded"
							value={name}
							onChange={handleNameChange}
						/>
					</div>
					<div className="field">
						<label className="label">Cost</label>
						<input
							className="input is-expanded"
							value={cost || ""}
							onChange={handleCostChange}
							type="number"
						/>
					</div>
				</div>
				<div className="field">
					<button className="button is-link" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
