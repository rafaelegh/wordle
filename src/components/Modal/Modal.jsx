import CloseIcon from "@mui/icons-material/Close";
import { useStore } from "../../Context/Store";

function Modal(props) {
  return (
    <div className="absolute w-full h-full grid place-content-center ">
      <div
        className="z-20 flex place-self-center flex-col rounded-2xl bg-navbar p-5 pb-10 dark:bg-dark7 dark:text-white pt-14 border border-black dark:border-wrong"
        style={{ width: "min(600px, 90vw)", height: "80vh)" }}
      >
        <div className="flex justify-center items-center pb-5 mb-11">
          <h2 className="font-extrabold fon text-4xl text-center">{props.title}</h2>
        </div>
        <div className="modal sm:px-7">
          {props.children}
        </div>
        <div className="justify-center">
          <button onClick={() => props.openModal(false)} className="bg-correct text-white w-1/2 h-12 mt-8 text-2xl font-bold rounded-md">
            {props.btnText}
          </button>
        </div>
      </div>
      <div
        className="z-10 absolute w-full h-full grid place-cente bg-glass dark:bg-dark-glass"
        onClick={() => {
          props.openModal(false);
        }}
      />
    </div>
  );
}

export default Modal;
