import { createSlice } from "@reduxjs/toolkit";

const checkedSlice = createSlice({
    name: 'checked',
    initialState: [],
    reducers: {
        toggleChecked: (state, action) => {
            const idx = state.indexOf(action.payload);
            if (idx < 0) {
                // not in state -> add
                state.push(action.payload);
            } else {
                // in state -> remove
                state.splice(idx, 1);
            }
        }
    }
});

export const checkedReducer = checkedSlice.reducer;
export const { toggleChecked } = checkedSlice.actions;
