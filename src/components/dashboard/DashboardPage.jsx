import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";

const DashboardPage = () => {
  return (
    <div className="flex w-full h-dvh">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;


