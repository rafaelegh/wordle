function Box(props) {
  let state = "text-black border border-black dark:text-white bg-white dark:bg-dark1 dark:border-wrong";
  if (props.state === "C") state = "bg-correct";
  if (props.state === "E") state = "bg-exist";
  if (props.state === "N") state = "bg-wrong dark:bg-gray-700";
  return (
    <div
      className={
        "w-8 h-8 sm:w-20 sm:h-20 grid place-items-center p-0 m-0 font-bold text-lg sm:text-4xl rounded-md  " + state
      }
    >
      {props.value}
    </div>
  );
}

function Help() {
  return (
    <>
      <div className="text-left text-base sm:text-base py-5 font-normal mr-1">
        <p>Adivina la palabra oculta en cinco intentos.</p>
        <br />
        <p>Cada intento debe ser una palabra válida de 5 letras.</p>
        <br />
        <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
    </div>

      <hr />
      <h3 className="text-left font-bold py-5">Ejemplos</h3>
      <div className="flex justify-center gap-2.5 mb-4">
        <Box value="G" state="C" />
        <Box value="A" />
        <Box value="T" />
        <Box value="O" />
        <Box value="S" />
      </div>
      <p className="text-left text-sm sm:text-base py-2">
        La letra <b>G</b> está en la palabra y en la posición correcta.
      </p>
      <div className="flex justify-center gap-2.5 mb-4">
        <Box value="V" />
        <Box value="O" />
        <Box value="C" state="E" />
        <Box value="A" />
        <Box value="L" />
      </div>
      <p className="text-left text-sm sm:text-base py-2">
        La letra <b>C</b> está en la palabra pero en la posición incorrecta.
      </p>
      <div className="flex justify-center gap-2.5 mb-4">
        <Box value="C" />
        <Box value="A" />
        <Box value="N" />
        <Box value="T" />
        <Box value="O" state="N" />
      </div>
      <p className="text-left text-sm sm:text-base py-2">
        La letra <b>O</b> no está en la palabra.
      </p>
      <br />
      <p>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
      <br />
      <p className="text-center">¡Una palabra nueva cada 5 minutos!</p>
    </>
  );
}

export default Help;
