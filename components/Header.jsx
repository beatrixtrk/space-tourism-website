import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
	return (
		<header className="p-6 md:p-0 lg:pt-10 fixed top-0 left-0 w-full z-10">
			<div className="flex items-center justify-between">
				<Logo style="md:pl-10" />
				<div className="md:bg-white md:bg-opacity-5 md:backdrop-blur-[81.55px] md:px-16  lg:pl-32 lg:pr-40 ">
					<NavBar
						containerStyle="flex md:gap-x-10 lg:gap-x-16"
						linkStyle="text-white font-BarlowCondensed uppercase text-sm lg:text-base relative md:py-8 lg:py-9"
						underlineStyle="absolute left-0 top-[calc(100%-2px)] h-[2px] bg-white w-full"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
