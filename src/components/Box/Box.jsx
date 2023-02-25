import { useEffect, useState } from "react";
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const boxClass = "text-black dark:bg-dark4 dark:text-white bg-empty";

function Box(props) {
  const [state, setState] = useState(boxClass);

  useEffect(() => {
    setTimeout(() => {
      if (props.state === "C")
        setState("bg-correct text-white");
      if (props.state === "E")
        setState("bg-exist text-white");
      if (props.state === "N")
        setState("bg-wrong text-white");
      if (props.state === "") 
        setState(boxClass);
    }, 125 * props.pos);
  }, [props.state]);

  return (
    <div
      className={
        "h-12 w-12 sm:w-20 sm:h-20 grid place-items-center p-0 mb-2.5 mr-2.5 font-bold text-4xl rounded-md " + state
      }
    >
      {props.value === "DEL" ? <BackspaceOutlinedIcon /> : props.value}
    </div>
  );
}

export default Box;
