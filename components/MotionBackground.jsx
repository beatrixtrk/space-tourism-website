'use client';

import { motion } from 'framer-motion';

const MotionBackground = ({ backgroundImage, backgroundPositon }) => {
	return (
		<motion.div
			initial={{ x: '0%', y: '-10%' }}
			animate={{ x: '0%', y: ['-10%', '0%', '-10%'] }}
			transition={{
				duration: 30,
				ease: 'easeInOut',
				repeat: Infinity,
				repeatType: 'reverse',
			}}
			style={{
				height: '130vh',
			}}
			className={`min-h-screen bg-no-repeat bg-cover absolute top:0 md:top-[-10%] right-0 w-full z-0 ${backgroundImage} ${backgroundPositon}`}
		/>
	);
};

export default MotionBackground;
