'use client';

import { Link } from '@nextui-org/react';
import { motion } from 'framer-motion';

const ExploreButton = () => {
	return (
		<Link
			className="w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[247px] lg:h-[247px] bg-white rounded-full justify-center font-Bellefair text-dark text-xl md:text-[32px] uppercase hover:opacity-100 relative"
			href="/destination"
		>
			<motion.div
				className="absolute w-full h-full bg-white opacity-10 rounded-full"
				whileHover={{ scale: 1.4 }}
				transition={{ duration: 0.3 }}
			/>
			Explore
		</Link>
	);
};

export default ExploreButton;
