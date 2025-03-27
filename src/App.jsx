function App() {
  return (
    <>
      <div className="flex">
        <div className="h-20 w-20 bg-amber-200 flex justify-center items-center">
          1
        </div>
        <div className="h-20 w-20 bg-amber-600 flex justify-center items-center">
          2
        </div>
      </div>
      {/*  */}
      <div className="w-80">
        <img src="card.png" />
      </div>
      {/*  */}
      <div className="bg-stone-900 h-100 w-80 text-gray-400 text-xs">
        <div className="flex gap-4 items-center">
          <div className="bg-red-500 text-black text-base text-l p-3 w-12 ml-4 rounded-full flex justify-center items-center">
            R
          </div>
          <div className="">
            <p className="font-semibold text-gray-300">
              Shrimp and Chorizo Paella
            </p>
            <p className="font-light">September 14, 2016</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
