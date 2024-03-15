import React, { useEffect, useState } from "react";
import "./StatisticsPage.css";
import PieChart from "../../components/PieChart/PieChart";
import axios from "axios";
import { allUsers } from "../../baseUrl/baseUrl";
import { motion } from "framer-motion";

const StatisticsPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const results = await axios.get(allUsers);
      const data = results.data;
      setUserData(data.users);
    };

    fetchUsers();
  }, []);

  return (
    <motion.section
      key="page"
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
      transition={{ delay: 0, duration: 0.8 }}
      className="statistics-section"
    >
      <div>
        <h2 className="page-title">User Statistics</h2>
      </div>
      <div>
        <h4 className="page-subtitle">
          This is based on users height and weight characteristics
        </h4>
      </div>
      <div>
        <PieChart users={userData} />
      </div>
    </motion.section>
  );
};

export default StatisticsPage;
