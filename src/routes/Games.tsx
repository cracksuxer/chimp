import tw from "twin.macro";
import { NavLink } from "react-router-dom";

const games = [
	{
		path: "chimp",
		name: "Chimp",
	},
	{
		path: "",
		name: "",
	},
	{
		path: "",
		name: "",
	},
	{
		path: "",
		name: "",
	},
	{
		path: "",
		name: "",
	},
];

const Container = tw.div`w-4/5 m-auto flex justify-center items-center gap-16 mt-10 flex-col`;
const Title = tw.p`text-4xl font-semibold text-teal-600`;
const Grid = tw.div`grid grid-cols-3 w-2/3 gap-5`;
const Game = tw.div`w-full h-36 bg-gray-800 rounded-lg hover:scale-105 duration-150 transform-gpu flex items-center justify-center cursor-pointer`;
const GameTitle = tw.p`text-2xl text-teal-500 font-semibold`;

const Games: React.FC = () => {
	return (
		<Container>
			<Title>Available games</Title>
			<Grid>
				{games.map(({ name, path }) => (
					<NavLink to={path}>
						<Game>
							<GameTitle>{name.toUpperCase()}</GameTitle>
						</Game>
					</NavLink>
				))}
			</Grid>
		</Container>
	);
};

export default Games;
