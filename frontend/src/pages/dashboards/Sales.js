import React from "react";
import SalesDashboard from "../../components/dashboards/SalesDashboard/SalesOverview";
import SalesPerformanceChart from "../../components/dashboards/SalesDashboard/SalesPerformanceChart";
import SalesRecords from "../../components/dashboards/SalesDashboard/SalesRecords";

const Sales = () => {
  return (
    <div>
      <h2>Sales Dashboard</h2>
      
      <SalesDashboard />
      <SalesPerformanceChart />
      <SalesRecords />
    </div>
  );
};

export default Sales;
