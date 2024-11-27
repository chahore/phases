const App = () => {
  const colors = ["bg-red-500", "bg-black", "bg-blue-500"];
  const numbers = Array.from({ length: 120 }, (_, index) => ({
    number: index + 1,
    color: colors[Math.floor(index / 2) % colors.length],
  }));

  return (
    <main className="grid grid-cols-2 h-screen bg-black text-white text-3xl font-bold overflow-x-hidden">
      {numbers.map(({ number, color }) => (
        <div
          key={number}
          className={`${color} flex justify-center items-center`}
        >
          {number}
        </div>
      ))}
    </main>
  );
};

export default App;
