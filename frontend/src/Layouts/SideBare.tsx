import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Telescope, PencilRuler, Trash, BookImage, Star, Menu, X, LogOut, CirclePlus, Settings } from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "../Hooks/DarkModeContext";
import CrownButton from "../Components/ui/UpdradeButton";
import NotificationDropdown from "../Components/NotificationDropdown";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { dark, toggle } = useDarkMode();

  const navigate = useNavigate();

  const menuItems = [
    { path: "/explore", label: "Explore", icon: Telescope },
    { path: "/create", label: "Create", icon: PencilRuler },
    { path: "/media", label: "My Media", icon: BookImage },
    { path: "/favorites", label: "Favorites", icon: Star },
    { path: "/uploads", label: "Uploads", icon: CirclePlus },
    { path: "/trash", label: "Trash", icon: Trash },
  ];

  // ✅ Determine current page title dynamically
  const currentPage = 
    menuItems.find((item) => location.pathname.startsWith(item.path))?.label ||
    (location.pathname === "/setting" ? "Settings" : location.pathname.slice(1));

  return (
    <div className="h-screen bg-white dark:bg-black flex">
      {/* Mobile menu overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <img src={`/EasyThumb_Logo.png`} alt="EasyThumb_Logo" className="w-10" />
            <span className="ml-1 text-xl font-bold text-black dark:text-white">EasyThumb</span>
          </div>
          <button
            className="lg:hidden text-gray-700 dark:text-gray-200 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4 flex-1 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-sky-100 text-sky-500 shadow-sm"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Settings & Logout */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-5">
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              `group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-sky-100 text-sky-500 shadow-sm"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`
            }
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </NavLink>
          <button
            onClick={() => console.log("Logging out...")}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-500 bg-red-100 hover:bg-red-200 rounded-xl transition-all duration-200"
          >
            <LogOut className="mr-3 h-5 w-5 text-red-500" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-screen ml-0">
        {/* Top bar */}
        <header className="bg-white dark:bg-black shadow-sm border-b border-gray-200 dark:border-gray-800 h-16 flex-shrink-0">
          <div className="flex items-center justify-between h-full px-6">
            <div className="flex items-center space-x-3">
              <button
                className="lg:hidden text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              {/* ✅ Dynamic page title */}
              <h1 className="text-gray-700 dark:text-gray-200 text-2xl font-bold">
                {currentPage}
              </h1>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                onClick={toggle}
                title="Toggle dark mode"
              >
                {dark ? (
                  <svg className="size-4 m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                ) : (
                  <svg className="size-4 m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                )}
              </button>
              <NotificationDropdown />
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-sky-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Z</span>
                </div>
              </div>
              <CrownButton onClick={() => navigate("/pricing")} />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 bg-white dark:bg-black overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
