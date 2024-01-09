import { useState, useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataInternal = async () => {
      try {
        const response = await fetch("./Data.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataInternal();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return { data, isLoading, error };
};

export default useFetchData;
