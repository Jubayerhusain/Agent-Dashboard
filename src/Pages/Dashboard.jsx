import React from "react";
import Stats from "../Components/dashboard/Stats";
import PropertyAnalytics from "../Components/dashboard/PropertyAnalytics";

const Dashboard = () => {
  return (
    <div>
      <header className="bg-white p-5 rounded-lg shadow mb-6">
        <h1>Dashboard</h1>
      </header>
      <div>
        <Stats />
        <div className="flex justify-between items-center my-6">
          <div className="w-6/12">
            <PropertyAnalytics />
          </div>
          <div className="w-6/12 border border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
