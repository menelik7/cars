import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
	carsReducer,
	addCar,
	removeCar,
	changeSearchTerm,
} from "./slices/carSlice";

const store = configureStore({
	reducer: {
		cars: carsReducer,
		form: formReducer,
	},
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
