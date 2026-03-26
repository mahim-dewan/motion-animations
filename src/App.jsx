import ButtonAnimate from "./components/ButtonAnimate";
import ExitAnimate from "./components/ExitAnimate";
import ExitAndStaggerAnimation from "./components/ExitAndStaggerAnimation";
import DashboardPage from "./components/dashboard/DashboardPage";
import ScrollBox from "./components/scrollAnimation/ScrollBox";
import LayoutContainer from "./components/layoutAnimation/LayoutContainer";
import Navbar from "./components/Navbar";
import TextAnimation from "./components/useAnimate/TextAnimation";
import OrderButton from "./components/useAnimate/OrderButton";

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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="p-2 mb-5 text-2xl">Click on the delete icon</p>
        <ExitAndStaggerAnimation />
      </div>
      <DashboardPage />
      <ScrollBox />
      <LayoutContainer />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="p-2 mb-5 text-2xl">Hover on menu list</p>
        <Navbar />
      </div>

      <TextAnimation />
      <OrderButton />
    </div>
  );
}

export default App;
