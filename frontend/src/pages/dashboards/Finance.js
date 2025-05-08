import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Finance = () => {
  const [financeData, setFinanceData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const { data } = await axios.get("https://iwb-2213.vercel.app/api/finance");
        setFinanceData(data);
      } catch (error) {
        console.error("❌ Error fetching finance data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFinanceData();
  }, []);

  const chartData = {
    labels: ["Revenue", "Expenses", "Net Income"],
    datasets: [
      {
        label: "Financial Overview ($)",
        data: [
          financeData.totalRevenue || 0,
          financeData.totalExpenses || 0,
          financeData.netIncome || 0
        ],
        backgroundColor: ["green", "red", "blue"]
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Finance Summary"
      }
    }
  };

  if (loading) return <p>⏳ Loading finance data...</p>;

  return (
    <div className="dashboard">
      <h2>💰 Finance Dashboard</h2>
      <p>Track revenue, expenses & net income.</p>

      <div className="chart-container" style={{ height: "400px", marginBottom: "20px" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <ul>
        <li className="finance-highlight">
          📊 <strong>Total Revenue:</strong> ${financeData.totalRevenue}
        </li>
        <li>
          📊 <strong>Total Sales Transactions:</strong> {financeData.totalSales}
        </li>
        <li>
          📊 <strong>Total Expenses:</strong> ${financeData.totalExpenses}
        </li>
        <li className="finance-highlight">
          📊 <strong>Net Income:</strong> ${financeData.netIncome}
        </li>
      </ul>
    </div>
  );
};

export default Finance;
