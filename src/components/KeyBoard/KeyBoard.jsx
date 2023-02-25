import { useEffect, useState } from "react";
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'; 

const keyboard = {
  line1: "QWERTYUIOP",
  line2: "ASDFGHJKLÑ",
  line3: "ZXCVBNM",
};

const keyClass = "bg-gray-200 hover:bg-gray-300 dark:bg-dark5 dark:text-white dark:hover:bg-zinc-700";

function Key(props) {
  const [state, setState] = useState(keyClass);

  const x = props.value.length === 1 ? "w-7 sm:w-11 mb-2 " : "p-2 w-20 sm:p-2 ";
  const returnKey = () => {
    props.getKey(props.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (props.state === "C") setState("bg-correct text-white");
      if (props.state === "E") setState("bg-exist text-white");
      if (props.state === "N") setState("bg-wrong text-white dark:bg-dark6");
      if (props.state === "") setState(keyClass);
    }, 500);
  }, [props.state]);

  return (
    <button
      className={
        x +
        state +
        " h-14 300 grid items-center rounded font-semibold cursor-pointer justify-center text-keyboard-letter"
      }
      onClick={returnKey}
    >
      {props.value === "DEL" ? <BackspaceOutlinedIcon /> : props.value}
    </button>
  );
}

function KeyBoard(props) {

  const keyHandler = (value) => {
    props.keyHandler(value);
  };

  return (
    <div className="flex flex-col items-center w-full pb-5 bg-keyboard-full dark:bg-dark2 pt-9 rounded-2xl mb-40">
      <div className="flex gap-2.5 my-0.5 w-fit">
        {keyboard.line1.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={props.letters[value]}
          />
        ))}
      </div>
      <div className="flex gap-2.5 my-0.5 w-fit ml-11">
        {keyboard.line2.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={props.letters[value]}
          />
        ))}
      </div>
      <div className="flex gap-2.5 my-0.5 w-fit mr-11">
        <Key value="ENTER" state="" getKey={keyHandler} />
        {keyboard.line3.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={props.letters[value]}
          />
        ))}
        <Key value="DEL" state="" getKey={keyHandler} />
      </div>
    </div>
  );
}

export default KeyBoard;
