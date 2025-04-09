import { decrement,  incrementAsync, incrementByAmount } from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";
import { useSelector,useDispatch } from "react-redux";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
        <h2>{count}</h2>
        <div>
            <button
                onClick={() => {
                    dispatch(incrementAsync(5));
                // dispatch(increment());
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                Decrement
            </button>
            <button
                onClick={() => {
                    dispatch(incrementByAmount(15)); 
                }}
            >   
                Increment by 5
            </button>
        </div>
        </div>
    );
    }