import React, { useEffect, useState } from "react";
import "./UserTable.css";
import axios from "axios";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { allUsers } from "../../baseUrl/baseUrl";
import { motion } from "framer-motion";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const results = await axios.get(allUsers);
      const data = results.data;
      setUserData(data.users);
    };

    fetchUsers();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>User Data Table</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <motion.section
        key="page"
        className="usertable-section"
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
        transition={{ delay: 0, duration: 0.8 }}
      >
        <div>
          <h2>Totally {userData.length} user details registered at Italy</h2>
        </div>

        <div>
          <input
            // className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="&#128269; Search Fistname / Lastname / Email address"
          />
        </div>

        {/* Table part */}

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Email</th>
              <th>Detailed View</th>
            </tr>
          </thead>

          {userData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.firstName.toLowerCase().includes(search) ||
                    item.lastName.toLowerCase().includes(search) ||
                    item.email.toLowerCase().includes(search);
            })
            .map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}.</td>
                  <td className="capitalize">{user.firstName}</td>
                  <td className="capitalize">{user.lastName}</td>
                  <td className="capitalize">{user.gender}</td>
                  <td>{user.age}</td>
                  <td className="lowercase">{user.email} </td>
                  <td>
                    <Link to={`/user/${user.id}`} className="linkStyle">
                      <RxExternalLink className="icon" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </motion.section>
    </HelmetProvider>
  );
};

export default UserTable;
