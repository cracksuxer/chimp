import tw from "twin.macro";
import { routes } from "..";
import { NavLink } from "react-router-dom";

const HeaderContainer = tw.header`bg-teal-100`;
const StyledNav = tw.nav`flex items-center justify-between p-6`;
const Logo = tw.img`h-8 w-auto  cursor-pointer`;
const Login = tw.div`text-sm font-semibold leading-6 text-gray-900 cursor-pointer`;

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<StyledNav>
				<NavLink to={routes.home}>
					<Logo src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
				</NavLink>
				<Login>
					Log in <span aria-hidden="true">&rarr;</span>
				</Login>
			</StyledNav>
		</HeaderContainer>
	);
};

export default Header;
