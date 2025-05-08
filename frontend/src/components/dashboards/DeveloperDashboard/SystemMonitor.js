import React, { useState, useEffect } from "react";
import axios from "axios";

const SystemMonitor = () => {
  const [metrics, setMetrics] = useState({ cpu: 0, memory: 0, uptime: 0 });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get("https://iwb-2213.vercel.app/api/developer/metrics");
        setMetrics(response.data);
      } catch (error) {
        console.error("Error fetching system metrics", error);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <div>
      <h2>System Monitoring</h2>
      <p>CPU Usage: {metrics.cpu}%</p>
      <p>Memory Usage: {metrics.memory}%</p>
      <p>Uptime: {metrics.uptime} hours</p>
    </div>
  );
};

export default SystemMonitor;
