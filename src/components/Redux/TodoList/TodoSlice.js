import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTodoList = createAsyncThunk('fetchTodo', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return response.json();
    }
    catch (e) {
        return e.message;
    }
});

const TodoSlice = createSlice({
    name: 'Todo',
    initialState: {
        fetchingTodo: false,
        data: null,
        todoError: false,
        errorResponse: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodoList.pending, (state, action) => {
            state.fetchingTodo = true;
        });
        builder.addCase(fetchTodoList.fulfilled, (state, action) => {
            state.fetchingTodo = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodoList.rejected, (state, action) => {
            state.todoError = true;
            state.errorResponse = action.payload;
        });
    }
});

export default TodoSlice.reducer;
