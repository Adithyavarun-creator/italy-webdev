import React from "react";
import "./UserCompany.css";
import { ImUserTie } from "react-icons/im";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdComputer, MdLocationCity } from "react-icons/md";
import { LiaCitySolid } from "react-icons/lia";
import { IoCodeSlashOutline, IoLocationOutline } from "react-icons/io5";
import { PiSignpostLight } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { motion } from "framer-motion";

const UserCompany = ({ user }) => {
  return (
    <section className="userjob-section">
      <div>
        <h2 className="headingtitle flex">
          <ImUserTie />
          User's Company
        </h2>
      </div>
      <div className="companylayoutcontent">
        <div className="companydetailbox">
          <div className="companycontent">
            <h3 className="flex">
              <LiaCitySolid />
              Company Name
            </h3>
            <span>{user.company.name}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <MdComputer />
              Department
            </h3>
            <span>{user.company.department}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <IoCodeSlashOutline />
              Title
            </h3>
            <span>{user.company.title}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <IoLocationOutline />
              Address
            </h3>
            <span>{user.address.address}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <LiaCitySolid />
              City
            </h3>
            <span>{user.company.address.city}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <PiSignpostLight />
              Postal Code
            </h3>
            <span>{user.company.address.postalCode}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <BsBuildings />
              State
            </h3>
            <span>{user.company.address.state}</span>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 0,
          }}
          whileInView={{
            opacity: 1,
            x: -20,
            transition: {
              duration: 2,
            },
          }}
          viewport={{ once: true }}
          className="imagecenter"
        >
          <FaBuildingUser className="companyicon" />
        </motion.div>
      </div>
    </section>
  );
};

export default UserCompany;
