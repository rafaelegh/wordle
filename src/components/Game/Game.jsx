import { useState, useEffect } from "react";
import { useStore } from "../../Context/Store";
import { defaultBoard, defaultLetters } from "../../lib/resetGame";
import Board from "../Board/Board";
import Error from "../Error/Error";
import Help from "../Help/Help";
import KeyBoard from "../KeyBoard/KeyBoard";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/Navbar";
import Statitics from "../Statitics/Statitics";
import styles from "./style.module.css";

function Game() {
  const [help, setHelp] = useState(true);
  const [clicked, setClicked] = useState(0);
  const [error, setError] = useState("");

  const { 
    openStatitics, 
    setOpenStatitics, 
    timer, 
    letters, 
    setLetters, 
    changed, 
    letter, 
    setLetter, 
    reset, 
    setChanged, 
    setWin, 
    setLost, 
    setBoard, 
    setReset,
    setCol, 
    setRow,
    dark
   } = useStore();

  const onClickDown = (event) => {
    if (event.key == "Enter") {
      setLetter("ENTER");
      setClicked(clicked + 1);
    } else if (event.key == "Backspace") {
      setLetter("DEL");
      setClicked(clicked + 1);
    } else if ("abcdefghijklmnopqrstuvwxyz".includes(event.key.toLowerCase())) {
      setLetter(event.key.toUpperCase());
      setClicked(clicked + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onClickDown);

    return () => window.removeEventListener("keydown", onClickDown);
  });

  
  const keyHandler = (letterValue) => {
    console.log('letterValue: ', letterValue)
    setLetter(letterValue);
    setClicked(clicked + 1);
    console.log('keyhandler', letter)
  };
  
  useEffect(() => {
    const darkHandler = () => dark ? 
      document.documentElement.classList.add("dark") : 
      document.documentElement.classList.remove("dark");

    darkHandler();

  }, [dark]);

  useEffect(() => {
    if(reset) {
      setWin(false);
      setLost(false);
      setLetters(defaultLetters());
      setChanged(!changed);
      setBoard(defaultBoard());
      setLetter('');
      setChanged(!changed);
      setReset(false);
      setCol(0);
      setRow(0);
    }
  }, [reset])


  return (
    <>
      {(help) && (
        <Modal title="Cómo jugar" btnText="!JUGAR¡" openModal={setHelp}>
          {" "}
          <Help />
          {" "}
        </Modal>
      )}
      {(openStatitics) && (
        <Modal title="Estadísticas" btnText="Aceptar" openModal={setOpenStatitics}>
          {" "}
          <Statitics timer={timer}/>
          {" "}
        </Modal>
      )}
      {error && <Error>{error}</Error>}
      <div className={styles.game}>
        <NavBar help={setHelp} />
        <Board
          letter={letter}
          clicks={clicked}
          error={setError}
        />
        <KeyBoard keyHandler={keyHandler} changed={changed} letters={letters} />
      </div>
    </>
  );
}

export default Game;
