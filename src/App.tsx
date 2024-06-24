function App() {
  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <div className=" flex gap-10 border border-purple-300 rounded-md bg-slate-200 p-10">
        <button className=" px-3 py-2 rounded-md bg-green-400 text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className=" text-3xl my-5">0</h1>
        <button className=" px-3 py-2 rounded-md bg-red-400 text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
