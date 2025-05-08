import React from "react";
import SystemMonitor from "../../components/dashboards/DeveloperDashboard/SystemMonitor";
import AppFileManager from "../../components/dashboards/DeveloperDashboard/AppFileManager";
import DeploymentControls from "../../components/dashboards/DeveloperDashboard/DeploymentControls";

const Developer = () => {
  return (
    <div>
      <h2>Developer Dashboard</h2>
      <SystemMonitor />
      <AppFileManager />
      <DeploymentControls />
    </div>
  );
};

export default Developer;
