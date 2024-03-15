import { FaBitcoin } from "react-icons/fa";
import "./UserContact.css";
import {
  MdConnectWithoutContact,
  MdOutlineAttachEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { copyToClipBoard } from "../../baseUrl/baseUrl";
import { FaRegCopy } from "react-icons/fa6";

const UserContact = ({ user }) => {
  return (
    <section className="">
      <div>
        <h2 className="headingtitle flex">
          <MdConnectWithoutContact />
          User Contact Details
        </h2>
      </div>
      <div className="banksection">
        <div className="bankaccountbox">
          <div className="accounticonbox">
            <MdOutlineAttachEmail className="accounticon" />
          </div>
          <div>
            <h2 className="banktitle">Connect with Email</h2>
          </div>
          <div>
            <h2 className="banktext lowercase flex">
              {user.email}{" "}
              <FaRegCopy
                className="clipboard"
                onClick={() => {
                  copyToClipBoard(user.email);
                }}
              />
            </h2>
          </div>
        </div>
        <div className="bankaccountbox">
          <div className="accounticonbox">
            <MdOutlinePhone className="accounticon" />
          </div>
          <div>
            <h2 className="banktitle">Connect with Phone</h2>
          </div>
          <div>
            <h2 className="banktext flex">
              {user.phone}{" "}
              <FaRegCopy
                className="clipboard"
                onClick={() => {
                  copyToClipBoard(user.phone);
                }}
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserContact;
