import MotionBackground from '@/components/MotionBackground';

const Crew = () => {
	return (
		<main className="h-screen overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop"
				backgroundPositon="bg-top"
			/>
		</main>
	);
};

export default Crew;
