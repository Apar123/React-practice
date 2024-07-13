import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { setName, setEmail } = formSlice.actions;

export default formSlice.reducer;
