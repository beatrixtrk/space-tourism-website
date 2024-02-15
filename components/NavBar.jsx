'use client';
import { useState } from 'react';
import { Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';

const pages = [
	{
		id: '00',
		name: 'Home',
		path: '/',
	},
	{
		id: '01',
		name: 'Destination',
		path: '/destination',
	},
	{
		id: '02',
		name: 'Crew',
		path: '/crew',
	},
	{
		id: '03',
		name: 'Technology',
		path: '/technology',
	},
];

const NavBar = ({ containerStyle, linkStyle, underlineStyle }) => {
	const path = usePathname();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<Hamburger
				color="#FFFFFF"
				toggled={isMenuOpen}
				toggle={setIsMenuOpen}
				duration={0.8}
			/>
			<nav
				className={`${containerStyle} ${
					isMenuOpen ? 'navbar-open' : ''
				}`}
			>
				{pages.map((page, index) => {
					return (
						<Link
							className={`${linkStyle}`}
							href={page.path}
							key={`nav-${index}`}
						>
							<span className="flex md:hidden lg:flex pr-3 font-bold">
								{page.id}
							</span>
							{page.name}
							{page.path === path && (
								<motion.span
									key={`nav-${path}`}
									initial={{ y: '-100%' }}
									animate={{ y: 0 }}
									transition={{ type: 'tween' }}
									layoutId="navUnderline"
									className={`${underlineStyle} hidden md:block`}
								/>
							)}
						</Link>
					);
				})}
			</nav>
		</>
	);
};

export default NavBar;
