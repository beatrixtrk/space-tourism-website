import MotionBackground from '@/components/MotionBackground';

const Technology = () => {
	return (
		<main className="h-screen overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-technologynMobile md:bg-technologyTablet lg:bg-technologyDesktop"
				backgroundPositon="bg-top"
			/>
		</main>
	);
};

export default Technology;
