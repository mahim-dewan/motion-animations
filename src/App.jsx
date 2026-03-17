import ButtonAnimate from "./components/ButtonAnimate";
import ExitAnimate from "./components/ExitAnimate";

function App() {
  return (
    <div
      className="bg-gray-700 text-white min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(95,156,255,0.4) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="p-2 mb-5 text-2xl">Hover on the button</p>
        <ButtonAnimate />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="p-2 mb-5 text-2xl">Click on the close icon</p>
        <ExitAnimate />
      </div>
    </div>
  );
}

export default App;
