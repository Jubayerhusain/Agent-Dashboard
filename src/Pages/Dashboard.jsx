import React from "react";
import Stats from "../Components/dashboard/Stats";
import PropertyAnalytics from "../Components/dashboard/PropertyAnalytics";
import RecentMessages from "../Components/dashboard/RecentMessages";

const Dashboard = () => {
  return (
    <div>
      <header className="bg-white p-5 rounded-lg shadow mb-6">
        <h1>Dashboard</h1>
      </header>
      <div>
        <Stats />
        <div className="flex flex-col sm:flex-row justify-between items-top gap-6 my-6">
          <div className="md:w-6/12">
            <PropertyAnalytics />
          </div>
          <div className="md:w-6/12">
            <RecentMessages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
