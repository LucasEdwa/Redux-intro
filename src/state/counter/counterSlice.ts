import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action:PayloadAction<number>) => {
            state.value += action.payload;
        },
       
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("incrementAsync pending");
            })
        builder
            .addCase(incrementAsync.fulfilled, (state, action:PayloadAction<number>) => {
                state.value += action.payload;
            })
            
    },
});
// The function below is called a thunk and allows us to perform async logic
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
         await new Promise((resolve) =>
            setTimeout(() => {
                resolve(amount);
            }, 1000)
        );
        return amount;
    }
);
export const { increment, decrement,incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;