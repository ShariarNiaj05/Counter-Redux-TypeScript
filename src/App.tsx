import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <div className=" flex gap-10 border border-purple-300 rounded-md bg-slate-200 p-10">
        <button
          onClick={() => dispatch(increment())}
          className=" px-3 py-2 rounded-md bg-green-400 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className=" px-3 py-2 rounded-md bg-green-400 text-xl font-semibold text-white"
        >
          Increment By 5
        </button>
        <h1 className=" text-3xl my-5">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className=" px-3 py-2 rounded-md bg-red-400 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
