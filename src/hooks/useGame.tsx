import { useState, useEffect, useCallback } from "react";
import { generateSparseArray } from "../utils/generateSparseArray";

const MATRIX_SIZE = 6;
const INIT_VISIBLE_BOXES = 3;
const MAX_ROUNDS = 7;

export function useGame() {
  const [resetTimer, setResetTimer] = useState(false);
  const [round, setRound] = useState(1);
  const [visibleBoxes, setVisibleBoxes] = useState(3);
  const [boxes, setBoxes] = useState<(number | null)[]>(
    generateSparseArray(MATRIX_SIZE * MATRIX_SIZE, visibleBoxes)
  );
  const [started, setStarted] = useState(false);

  const regenerate = useCallback(
    (reset: boolean | undefined = false) => {
      setStarted(false);
      setBoxes(
        generateSparseArray(
          MATRIX_SIZE * MATRIX_SIZE,
          reset ? INIT_VISIBLE_BOXES : visibleBoxes
        )
      );
      reset && setVisibleBoxes(INIT_VISIBLE_BOXES);
      reset && setRound(1);
    },
    [visibleBoxes]
  );

  const reset = useCallback(() => {
    setResetTimer(true);
    setRound(1);
    setVisibleBoxes(INIT_VISIBLE_BOXES);
    regenerate(true);
  }, [regenerate]);

  const onEndRound = useCallback(() => {
    setRound((prev) => prev + 1);
    setVisibleBoxes((prev) => prev + 1);
    regenerate();
  }, [regenerate]);

  function removeBox(index: number) {
    if (!started) setStarted(true);

    if (!checkRemoved(index)) {
      regenerate(true);
      return;
    }

    const newBoxes = [...boxes];
    newBoxes[index] = null;
    setBoxes(newBoxes);
  }

  function checkRemoved(index: number) {
    const minNumber = Math.min(...(boxes.filter((n) => n != null) as number[]));
    return boxes[index] === minNumber;
  }

  useEffect(() => {
    if (boxes.every((n) => n == null)) onEndRound();
  }, [boxes, onEndRound]);

  useEffect(() => {
    if (round === MAX_ROUNDS) reset();
  }, [round, reset]);

  useEffect(() => {
    setBoxes(generateSparseArray(MATRIX_SIZE * MATRIX_SIZE, visibleBoxes));
  }, [visibleBoxes]);

  function handleResetTimerComplete() {
    setResetTimer(false);
  }

  return {
    resetTimer,
    handleResetTimerComplete,
    round,
    boxes,
    started,
    reset,
    removeBox,
  };
}
