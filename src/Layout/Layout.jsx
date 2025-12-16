import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { PiUserCircleDuotone, PiBuildingOffice } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa";
import { MdDomainAdd } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";

import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";

const NavItem = ({ icon: Icon, title, to, isDrawerOpen }) => {
  const isActive = window.location.pathname === to;

  return (
    <div className="mb-1">
      <a
        href={to}
        className={`w-full flex items-center ${
          isDrawerOpen ? "justify-start gap-3" : "justify-center"
        } px-3 py-2 ${
          isActive
            ? "bg-gradient-to-r from-green-400 to-lime-200 text-gray-800"
            : "text-gray-700 hover:bg-gray-100"
        } rounded-lg transition-colors duration-200`}
        title={title}
      >
        <Icon size={20} />
        {isDrawerOpen && <span className="text-sm">{title}</span>}
      </a>
    </div>
  );
};

const SectionLabel = ({ children, isDrawerOpen }) => {
  if (!isDrawerOpen) return null;

  return (
    <div className="px-3 py-2 mt-4 mb-2 border-t border-gray-200">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
};

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDrawer}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="rounded-2xl w-10 h-10 flex items-center justify-center">
                <img className="rounded-2xl" src={logo} alt="Logo" />
              </div>
              <span className="text-xl font-bold">ZedProperty</span>
            </div>

            <div className="max-w-md mx-8 hidden md:block rounded-2xl">
              <div className="relative">
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search Here"
                  className="w-full pl-10 bg-[#F3F3F5] pr-4 py-2 shadow-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 bg-[#F3F3F5] hover:bg-gray-100 rounded-[12px]">
              <AiOutlineMessage />
            </button>
            <button className="p-2 bg-[#F3F3F5] hover:bg-gray-100 rounded-[12px]">
              <IoMdNotificationsOutline />
            </button>
          </div>
        </div>
      </header>

      <div className="flex relative bg-gray-50">
        <aside
          className={`
          bg-white border-r border-gray-200 min-h-screen 
          transition-all duration-300 ease-in-out
          ${isDrawerOpen ? "w-64" : "w-20"} 
        `}
        >
          <nav className="p-3 h-[90vh] flex flex-col">
            <div className="flex-1 border-b border-gray-200 pb-4">
              {/* Dashboard Section */}
              <NavItem
                icon={MdDashboard}
                title="Dashboard"
                to="/"
                isDrawerOpen={isDrawerOpen}
              />

              <NavItem
                icon={MdMessage}
                title="Message"
                to="/message-inbox"
                isDrawerOpen={isDrawerOpen}
              />

              {/* Profile Section */}
              <SectionLabel isDrawerOpen={isDrawerOpen}>Profile</SectionLabel>

              <NavItem
                icon={PiUserCircleDuotone}
                title="Profile"
                to="/profile"
                isDrawerOpen={isDrawerOpen}
              />

              <NavItem
                icon={IoMdSettings}
                title="Account Settings"
                to="/account-settings"
                isDrawerOpen={isDrawerOpen}
              />

              <NavItem
                icon={FaBusinessTime}
                title="Membership"
                to="/membership"
                isDrawerOpen={isDrawerOpen}
              />

              {/* Listing Section */}
              <SectionLabel isDrawerOpen={isDrawerOpen}>Listing</SectionLabel>

              <NavItem
                icon={PiBuildingOffice}
                title="My Property"
                to="/property-list"
                isDrawerOpen={isDrawerOpen}
              />

              <NavItem
                icon={MdDomainAdd}
                title="Add New Property"
                to="/add-property"
                isDrawerOpen={isDrawerOpen}
              />

              <NavItem
                icon={TbMessageDots}
                title="Reviews"
                to="/reviews"
                isDrawerOpen={isDrawerOpen}
              />
            </div>

            {/* Bottom Profile Section */}
            {isDrawerOpen ? (
              <div className=" border-gray-200 pt-4">
                <div className="px-3 py-2 mb-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Profile
                  </span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-lime-200 flex items-center justify-center">
                    <img
                      className="h-full w-full rounded-full"
                      src={
                        "https://encrypted-tbn0.gstatic.com/imagehttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qJ9pU6Xj2EJKaRDVz-9Bd0xh2LnMklGw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qJ9pU6Xj2EJKaRDVz-9Bd0xh2LnMklGw&ss?q=tbn:ANd9GcTxz7qJ9pU6Xj2EJKaRDVz-9Bd0xh2LnMklGw&s"
                      }
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      Jenny Wilson
                    </p>
                    <p className="text-xs text-gray-500">jenny@example.com</p>
                  </div>
                </div>
                <button className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Log out</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-4 mt-4 flex justify-center">
                <button
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Log out"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </nav>
        </aside>

        <main className="flex-1 p-5 overflow-scroll h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
