import { Link, useLocation } from "react-router-dom";
import { PROTECTED_ROUTES } from "../routes";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  return (
    <aside
      className={`fixed left-0 top-0 mt-20 z-10 flex h-screen w-65 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {" "}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:px-6">
          {/* <!-- Menu Group --> */}
          <ul className="mb-6 flex flex-col gap-1.5">
            {/* <!-- Menu Item Calendar --> */}
            {PROTECTED_ROUTES.map((item, idx) => {
              const { icon: Icon } = item;
              return (
                <li key={idx}>
                  <Link
                    to={item?.path}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 ${
                      pathname === item?.path ? "bg-graydark" : ""
                    } duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
                  >
                    <Icon className="mr-2" />
                    {item?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
