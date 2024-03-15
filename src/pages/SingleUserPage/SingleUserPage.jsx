import React, { useState, useEffect, useRef } from "react";
import "./SingleUserPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { shortcutTitle, singleUser } from "../../baseUrl/baseUrl";
import {
  FaRegUser,
  FaMale,
  FaFemale,
  FaPhoneAlt,
  FaCity,
} from "react-icons/fa";
import {
  FaPersonArrowDownToLine,
  FaPersonArrowUpFromLine,
} from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiServerLine } from "react-icons/ri";
import {
  LiaMaleSolid,
  LiaFemaleSolid,
  LiaCitySolid,
  LiaBirthdayCakeSolid,
} from "react-icons/lia";
import moment from "moment";
import { FiPhone, FiUserPlus } from "react-icons/fi";
import { FiUserMinus } from "react-icons/fi";
import UserPhysical from "../../components/UserPhysical/UserPhysical";
import UserLocation from "../../components/UserLocation/UserLocation";
import UserStudies from "../../components/UserStudies/UserStudies";
import UserAccessory from "../../components/UserAccessory/UserAccessory";
import UserExperience from "../../components/UserCompany/UserCompany";
import UserBank from "../../components/UserBank/UserBank";
import UserCompany from "../../components/UserCompany/UserCompany";
import Modal from "../../components/Modal/Modal";
import UserBio from "../../components/UserBio/UserBio";
import UserContact from "../../components/UserContact/UserContact";
import { motion } from "framer-motion";

const SingleUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const physicalref = useRef(null);

  const companyref = useRef(null);

  const locationref = useRef(null);

  const educationref = useRef(null);

  const contactref = useRef(null);

  const bankref = useRef(null);

  const accessref = useRef(null);

  const handleClickphys = () => {
    physicalref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickaccess = () => {
    accessref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickcompany = () => {
    companyref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickedu = () => {
    educationref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickbank = () => {
    bankref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickloc = () => {
    locationref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickcontact = () => {
    contactref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(singleUser(id));
      const data = user.data;
      // console.log(data);
      setUser(data);
    };

    getUser();
  }, [id]);

  if (!user.id) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {user.firstName} {user.lastName} Profile
        </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <motion.section
        key="page"
        className="singleuser-section"
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
        transition={{ delay: 0, duration: 0.8 }}
      >
        <div>
          <h2 className="headingtitle flex">
            <span className="userid">{user.id}</span>&nbsp; User detail of{" "}
            {user.firstName}&nbsp;{user.lastName}
          </h2>
        </div>
        <div className="shortcut-section">
          <div>
            <span className="shortcut-title" onClick={handleClickphys}>
              #Physical
            </span>
          </div>
          <div>
            <span className="shortcut-title" onClick={handleClickloc}>
              #Location
            </span>
          </div>
          <div>
            <span className="shortcut-title" onClick={handleClickedu}>
              #Education
            </span>
          </div>
          <div>
            <span className="shortcut-title" onClick={handleClickaccess}>
              #Accessory
            </span>
          </div>
          <div>
            <span className="shortcut-title" onClick={handleClickcompany}>
              #Company
            </span>
          </div>
          <div>
            <span className="shortcut-title" onClick={handleClickcontact}>
              #Contact
            </span>
          </div>
          <div>
            <span className="shortcut-title" onClick={handleClickbank}>
              #Banking
            </span>
          </div>
        </div>

        {/* keep id no and name */}
        <div className="userbox">
          <UserBio
            user={user}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>

        <motion.div
          className="userbox"
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            y: -20,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          ref={physicalref}
        >
          <UserPhysical user={user} />
        </motion.div>

        <div className="userbox" ref={locationref}>
          <UserLocation user={user} />
        </div>

        <div className="userbox" ref={educationref}>
          <UserStudies user={user} />
        </div>

        <motion.div
          className="userbox"
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            y: -20,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          ref={accessref}
        >
          <UserAccessory user={user} />
        </motion.div>

        <div className="userbox" ref={companyref}>
          <UserCompany user={user} />
        </div>

        <div className="userbox" ref={contactref}>
          <UserContact user={user} />
        </div>

        <div className="userbox" ref={bankref}>
          <UserBank user={user} />
        </div>
      </motion.section>
    </HelmetProvider>
  );
};

export default SingleUserPage;
