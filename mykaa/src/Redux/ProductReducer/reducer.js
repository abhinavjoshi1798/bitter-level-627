import * as types from "./actionTypes";
const initialState = {
	loading: false,
	error: false,
	products: [],
	total: 0,
};
export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_PRODUCT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.GET_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: payload.data ? payload.data : [],
				total: payload.total,
			};
		case types.GET_PRODUCT_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
