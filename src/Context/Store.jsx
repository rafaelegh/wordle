import React, { useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { defaultBoard, defaultLetters } from '../lib/resetGame';
import words from "../words";

const StoreContext = React.createContext();

export const useStore = () => useContext(StoreContext);
 
export default function Store({children}) {

    const [wins, setWins] = useLocalStorage("wins", 0);
    const [games, setGames] = useLocalStorage("games", 0);
    const [openStatitics, setOpenStatitics] = useLocalStorage("openStatitics", false);
    const [win, setWin] = useLocalStorage("win", false);
    const [lost, setLost] = useLocalStorage("lost", false);
    const [letters, setLetters] = useLocalStorage("letters", defaultLetters());
    const [changed, setChanged] = useState(false);
    const [letter, setLetter] = useLocalStorage("letter",'');
    const [board, setBoard] = useLocalStorage("board", defaultBoard());
    const [reset, setReset] = useLocalStorage("reset", false);
    const [row, setRow] = useLocalStorage("row", 0);
    const [col, setCol] = useLocalStorage("col", 0);
    const [dark, setDark] = useLocalStorage("dark", false);

    console.log(wins,board)

    const timer = React.useMemo(() => Date.now() + (5 * 60000), [games]);
    const _correct = React.useMemo(() => words[Math.floor(Math.random() * words.length - 1)].toUpperCase(), [reset]);

    const [correct, setCorrect] = useLocalStorage("correct", _correct);
     useEffect(() => {
        if(reset) {
            setCorrect(_correct);
        }
     }, [reset])


    const contextValue = React.useMemo(() => {
        return {
            wins,
            setWins,
            games,
            setGames,
            openStatitics,
            setOpenStatitics,
            timer,
            correct,
            win,
            setWin,
            lost,
            setLost,
            letters,
            setLetters,
            changed,
            setChanged,
            letter,
            setLetter,
            board,
            setBoard,
            reset,
            setReset,
            row,
            setRow,
            col,
            setCol,
            dark,
            setDark,
        };
    },[
        wins,
        setWins,
        games,
        setGames,
        openStatitics,
        setOpenStatitics,
        timer,
        correct,
        win,
        setWin,
        lost,
        setLost,
        letters,
        setLetters,
        changed, 
        setChanged,
        letter,
        setLetter,
        board,
        setBoard,
        reset,
        setReset,
        row,
        setRow,
        col,
        setCol,
        dark,
        setDark,
    ]);

  return (
    <StoreContext.Provider value={contextValue}>
        {children}
    </StoreContext.Provider>
  )
}
