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
        },
        resetGame: (state, action) => {
            // save anything below this
            const lowerRange = (action.payload === 'goldensun') ? 0 :
                (action.payload === 'lostage') ? 100 :
                (action.payload === 'darkdawn') ? 200 :
                0;
            // save everything above this
            const upperRange = (action.payload === 'goldensun') ? 100 :
                (action.payload === 'lostage') ? 200 :
                (action.payload === 'darkdawn') ? 300 :
                300;
            
            return state.filter((id) => id < lowerRange || id > upperRange);
        }
    }
});

export const checkedReducer = checkedSlice.reducer;
export const { toggleChecked, resetGame } = checkedSlice.actions;
