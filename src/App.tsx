import { useState } from "react";
import { Dialog } from "@headlessui/react";
import tw from "twin.macro";
import AnimatedBox from "./components/AnimatedBox";
import Modal from "./components/Dialog";
import Timer from "./components/Timer";
import { useGame } from "./hooks/useGame";

const Container = tw.div`h-screen flex items-center flex-col mt-16 justify-center`;
const Grid = tw.div`grid grid-cols-6 gap-3 mt-16`;
const RegenerateButton = tw.button`p-3 bg-teal-500 rounded text-white`;

function App() {
  const [openFinishedDialog, setOpenFinishedDialog] = useState(false);

  const {
    boxes,
    removeBox,
    reset,
    round,
    started,
    handleResetTimerComplete,
    resetTimer,
  } = useGame();

  return (
    <>
      <Container>
        <p className="text-2xl">Round: {round}</p>
        <RegenerateButton onClick={reset}>Regenerate</RegenerateButton>
        <Grid>
          {boxes.map((n, i) => (
            <AnimatedBox
              started={started}
              key={i}
              index={i}
              removeBox={removeBox}
              n={n}
            />
          ))}
        </Grid>
        <Timer
          resetTimer={resetTimer}
          handleResetTimerComplete={handleResetTimerComplete}
          reset={reset}
        />
      </Container>

      <Modal isOpen={openFinishedDialog} setIsOpen={setOpenFinishedDialog}>
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
        >
          Success!!
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            You have finished the game! Click on the button above to regenerate
          </p>
        </div>
      </Modal>
    </>
  );
}

export default App;
