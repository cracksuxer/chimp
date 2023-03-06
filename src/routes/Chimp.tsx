import { Dialog } from "@headlessui/react";
import { useState } from "react";
import tw from "twin.macro";
import AnimatedBox from "../components/AnimatedBox";
import Modal from "../components/Dialog";
import Timer from "../components/Timer";
import { useGame } from "../hooks/useGame";

const Container = tw.div`h-screen bg-gray-800 flex items-center flex-col justify-center`;
const Grid = tw.div`grid grid-cols-6 gap-3 mt-16`;
const RegenerateButton = tw.button`p-3 bg-teal-500 rounded text-white`;

const Chimp: React.FC = () => {
	const [openFinishedDialog, setOpenFinishedDialog] = useState(false);

	const { boxes, removeBox, reset, round, started, handleResetTimerComplete, resetTimer } = useGame();

	return (
		<>
			<Container>
				<p className="text-2xl text-emerald-100 mb-5 font-medium">Round: {round}</p>
				<RegenerateButton onClick={reset}>Regenerate</RegenerateButton>
				<Grid>
					{boxes.map((n, i) => (
						<AnimatedBox started={started} key={i} index={i} removeBox={removeBox} n={n} />
					))}
				</Grid>
				<Timer reset={reset} resetTimer={resetTimer} handleResetTimerComplete={handleResetTimerComplete} />
			</Container>

			<Modal isOpen={openFinishedDialog} setIsOpen={setOpenFinishedDialog}>
				<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
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
};

export default Chimp;
