import React from "react";
import Dashboard from "@mui/icons-material/Dashboard";
import {
  AccountCircleOutlined,
  CreditCard,
  ExitToApp,
  InsertChart,
  LocalShipping,
  NotificationsNone,
  PersonOutlined,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydreamOutlined,
  Store,
} from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="sidebar h-[100vh] border-r-4 border-r-gray-200 ">
      <div className="p-3 px-8 text-center h-[50px] text-violet-700 font-bold text-xl">
        soloNingendo
      </div>
      <hr className="h-0  border-[0.5px] border-gray-200" />
      <div className="p-2">
        <div className=" text-gray-500">MAIN</div>
        <div className="flex p-1 items-center">
          <Dashboard className="text-violet-700 mr-2" />
          <span>Dashboard</span>
        </div>
        <div className=" text-gray-500">LIST</div>
        <div className="flex p-1 items-center">
          <PersonOutlined className="text-violet-700 mr-2" />
          <span>Users</span>
        </div>
        <div className="flex p-1 items-center">
          <Store className="text-violet-700 mr-2" />
          <span>Products</span>
        </div>
        <div className="flex p-1 items-center">
          <CreditCard className="text-violet-700 mr-2" />
          <span>Orders</span>
        </div>
        <div className="flex p-1 items-center">
          <LocalShipping className="text-violet-700 mr-2" />
          <span>Delivery</span>
        </div>
        <div className=" text-gray-500">USEFUL</div>
        <div className="flex p-1 items-center">
          <InsertChart className="text-violet-700 mr-2" />
          <span>Stats</span>
        </div>
        <div className="flex p-1 items-center">
          <NotificationsNone className="text-violet-700 mr-2" />
          <span>Notifications</span>
        </div>
        <div className=" text-gray-500">SERVICE</div>
        <div className="flex p-1 items-center">
          <SettingsSystemDaydreamOutlined className="text-violet-700 mr-2" />
          <span>System Health</span>
        </div>
        <div className="flex p-1 items-center">
          <PsychologyOutlined className="text-violet-700 mr-2" />
          <span>Logs</span>
        </div>
        <div className="flex p-1 items-center">
          <SettingsApplications className="text-violet-700 mr-2" />
          <span>Settings</span>
        </div>
        <div className=" text-gray-500">USER</div>
        <div className="flex p-1 items-center">
          <AccountCircleOutlined className="text-violet-700 mr-2" />
          <span>Profile</span>
        </div>
        <div className="flex p-1 items-center">
          <ExitToApp className="text-violet-700 mr-2" />
          <span>Logout</span>
        </div>

        <div className="mode mx-auto my-3 flex items-center">
          <div className="p-5 mx-2 border-violet-500 border-[0.5px] rounded-lg"></div>
          <div className="p-5 border-white border-[0.5px]  rounded-lg bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
