import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Loader from "../Loader/Loader";

const Modal = ({ setOpenModal, user }) => {
  return (
    <section className="modal-section">
      <div className="modalbox">
        <div className="closeend">
          <MdClose
            className="modalcloseicon"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div>
          {user.image ? (
            <img src={user.image} className="modalimage" alt="" />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Modal;
