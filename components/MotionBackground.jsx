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
				height: '120vh',
			}}
			className={`min-h-screen bg-no-repeat bg-cover static z-0 ${backgroundImage} ${backgroundPositon}`}
		/>
	);
};

export default MotionBackground;
