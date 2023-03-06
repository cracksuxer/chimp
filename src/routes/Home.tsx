import { Outlet } from "react-router";
import "twin.macro";
import Header from "../components/Header";

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Home;
