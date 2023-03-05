import tw from "twin.macro";

const Box = tw.div`cursor-pointer hover:bg-teal-500 transition duration-300 
                  bg-blue-500 
                  h-6 w-6 
                  flex items-center justify-center 
                  text-white text-4xl 
                  rounded 
                  p-10`;

const DisabledBox = tw.div`bg-white
                  text-white
                  h-6 w-6  
                  p-10`;

interface AnimatedBoxProps {
  n: number | null;
  index: number;
  started?: boolean;
  removeBox: (value: number) => void;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  n,
  started = false,
  index,
  removeBox,
}) => {
  function handleOnClick() {
    removeBox(index);
  }

  if (n == null) return <DisabledBox />;

  return <Box onClick={handleOnClick}>{started ? "" : n}</Box>;
};

export default AnimatedBox;
