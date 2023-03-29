import * as types from "./actionTypes";
import axios from "axios";
const URL = "https://obtainable-gray-tenor.glitch.me/allproducts";
export const getProduct = (params) => (dispatch) => {
	dispatch({ type: types.GET_PRODUCT_REQUEST });
	axios
		.get(URL, params)
		.then((res) => {
			dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: types.GET_PRODUCT_FAILURE });
		});
};
