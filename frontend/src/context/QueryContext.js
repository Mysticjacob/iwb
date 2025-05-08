import React, { createContext, useState } from "react";
import axios from "axios";

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitQuery = async (queryData) => {
    try {
      setLoading(true);
      const response = await axios.post("https://iwb-2213.vercel.app/api/support/submit", queryData);
      setQueries([...queries, response.data]);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting query:", error);
      setLoading(false);
    }
  };

  return (
    <QueryContext.Provider value={{ queries, submitQuery, loading }}>
      {children}
    </QueryContext.Provider>
  );
};
