import { useEffect, useState } from "react";
import Box from "../Box/Box";
import { useStore } from "../../Context/Store";
import words from "../../words";

function Board(props) {
  const [message, setMessage] = useState("");

  const { setWins, setGames, correct, win, setWin, lost, setLost, letters, setLetters, setChanged, setOpenStatitics, board,
    setBoard, col, setCol, row, setRow } = useStore();

  useEffect(() => {
    if (win || lost) {
      console.log("Game ended!");
    } else {
      if (props.clicks !== 0) {
        if (props.letter === "DEL") {
          setCol(col === 0 ? 0 : col - 1);
          setBoard((prevBoard) => {
            prevBoard[row][col === 0 ? 0 : col - 1][0] = "";
            return prevBoard;
          });
        } else {
          setBoard((prevBoard) => {
            if (col < 5) {
              if (props.letter !== "ENTER") {
                prevBoard[row][col][0] = props.letter;
                setCol(col + 1);
              } else {
                props.error("Words are 5 letters long!");
                setTimeout(() => {
                  props.error("");
                }, 1000);
              }
            } else {
              if (props.letter === "ENTER") {
                let correctLetters = 0;
                let word = "";
                for (let i = 0; i < 5; i++) {
                  word += prevBoard[row][i][0];
                }
                if (words.includes(word.toLowerCase())) {
                  for (let i = 0; i < 5; i++) {
                    if (correct[i] === prevBoard[row][i][0]) {
                      prevBoard[row][i][1] = "C";
                      correctLetters++;
                    } else if (correct.includes(prevBoard[row][i][0]))
                      prevBoard[row][i][1] = "E";
                    else prevBoard[row][i][1] = "N";
                    setRow(row + 1);
                    setCol(0);
                    setLetters((prev) => {
                      prev[board[row][i][0]] = board[row][i][1];
                      return prev;
                    });
                  }
                  if (correctLetters === 5) {
                    setWin(true);
                    setTimeout(() => {
                      setMessage("You WIN");
                    }, 750);
                    setGames(prevGames => prevGames + 1);
                    setWins(prevWins => prevWins + 1);
                    setOpenStatitics(true);
                  }
                  if (row === 4) {
                    setGames(prevGames => prevGames + 1);
                    setLost(true);
                    setTimeout(() => {
                      setMessage(`It was ${correct}`);
                    }, 750);
                    setOpenStatitics(true);
                  }
                  setChanged(!props.changed);

                  return prevBoard;
                } else {
                  props.error("Word not in dictionary");
                  setTimeout(() => {
                    props.error("");
                  }, 1000);
                }
              }
            }
            return prevBoard;
          });
        }
      }
    }
  }, [props.clicks]);

  return (
    <div className="px-10 grid gap-y-1 items-center w-100 justify-center mb-16">
      {board.map((row, key) => {
        return (
          <div key={key} className="flex gap-1 w-fit">
            {row.map((value, key) => (
              <Box key={key} value={value[0]} state={value[1]} pos={key} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
