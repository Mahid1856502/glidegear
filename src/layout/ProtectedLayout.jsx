import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const ProtectedLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="p-5 lg:ml-70">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
