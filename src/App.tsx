import { useState, useEffect } from "react";
import tw from "twin.macro";
import AnimatedBox from "./components/AnimatedBox";
import { generateSparseArray } from "./utils/generateSparseArray";

const MATRIX_SIZE = 6;
const LIMIT = 5;

const Container = tw.div`h-screen flex items-center flex-col mt-16 justify-center`;
const Grid = tw.div`grid grid-cols-6 gap-3 m-auto mt-16`;
const RegenerateButton = tw.button`p-3 bg-teal-500 rounded text-white`;

function App() {
  const [boxes, setBoxes] = useState<(number | null)[]>(
    generateSparseArray(MATRIX_SIZE * MATRIX_SIZE, LIMIT)
  );


  const [started, setStarted] = useState(false)

  function regenerate() {
    setStarted(false)
    setBoxes(generateSparseArray(MATRIX_SIZE * MATRIX_SIZE, LIMIT));
  }

  function removeBox(index: number) {
    if (!started) setStarted(true)
    
    if (!checkRemoved(index)) { 
      regenerate()
      return;
    }
    
    const newBoxes = [...boxes];
    newBoxes[index] = null;
    setBoxes(newBoxes);
  }

  function checkRemoved(index: number) {
    const minNumber = Math.min(...boxes.filter((n) => n != null) as number[]);
    return boxes[index] === minNumber;
  }

  useEffect(() => {
    if (boxes.every((n) => n == null)) {
      alert("You win!");
      regenerate();
    }
  }, [boxes]);

  return (
    <Container>
      <RegenerateButton onClick={regenerate}>Regenerate</RegenerateButton>
      <Grid>
        {boxes.map((n, i) => (
          <AnimatedBox started={started} key={i} index={i} removeBox={removeBox} n={n} />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
