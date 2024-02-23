'use client';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 10);
		});
	}, []);
	return (
		<header
			className={`p-6 md:p-0 fixed top-0 left-0 w-full z-10 transition-all ${
				scroll
					? 'bg-white bg-opacity-5 backdrop-blur-[81.55px]'
					: 'lg:pt-10'
			}`}
		>
			<div className="flex items-center justify-between">
				<Logo style="md:pl-10" />
				<div
					className={`md:px-16 lg:pl-32 lg:pr-40 relative navbar-wrapper ${
						scroll
							? ''
							: 'md:bg-white md:bg-opacity-5 md:backdrop-blur-[81.55px]'
					}`}
				>
					<span
						className={`hidden lg:block absolute top-1/2 -left-[55%] w-[60%] h-[1px] bg-white/25 ${
							scroll ? 'lg:hidden' : ''
						}`}
					></span>
					<NavBar
						containerStyle="block md:flex md:gap-x-10 lg:gap-x-16"
						linkStyle="text-white font-BarlowCondensed uppercase tracking-[2px] text-sm lg:text-base relative md:py-8 lg:py-9"
						underlineStyle="absolute left-0 top-[calc(100%-2px)] h-[2px] bg-white w-full"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
