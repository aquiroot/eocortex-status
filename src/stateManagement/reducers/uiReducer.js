import { types } from '../types/types';

const initialState = {
	isLoading: true,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.uiLoading:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};
