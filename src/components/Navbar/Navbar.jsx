import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const framerSidebarPanel = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.3 },
  };

  const framerText = (delay) => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    };
  };

  const mobilehome = () => {
    navigate("/");
    setToggle(false);
  };

  const mobileabout = () => {
    navigate("/about");
    setToggle(false);
  };

  const mobileedit = () => {
    navigate("/edit-image");
    setToggle(false);
  };

  return (
    <>
      <nav className="nav-container">
        <Link to="/" className="linkstyle nav-img-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/220px-Flag_of_Italy.svg.png"
            className="flaglogo"
            alt=""
          />
        </Link>
        <div className="nav-link-box">
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive
                ? "linkstyle active nav-linktext"
                : "nav-linktext linkstyle"
            }
          >
            Statistics Page
          </NavLink>
        </div>
      </nav>
      <nav className="mobile-navsection">
        <div className="mobile-menubox">
          <IoMdMenu
            className="mobile-menuicon"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {toggle && (
            <motion.div {...framerSidebarPanel} className="mobile-sidebar">
              <div className="mobile-navsection mobile-menubox">
                <motion.span {...framerText(0)}>
                  <IoMdClose
                    className="mobile-menuicon"
                    onClick={() => setToggle(false)}
                  />
                </motion.span>
              </div>

              <div className="mobile-navlistcontent">
                <ul className="mobile-ordered">
                  <motion.li
                    className="mobile-navlist"
                    {...framerText(2)}
                    onClick={mobilehome}
                  >
                    Home
                  </motion.li>
                  <motion.li
                    className="mobile-navlist"
                    {...framerText(4)}
                    onClick={mobileedit}
                  >
                    Statistics Page
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
