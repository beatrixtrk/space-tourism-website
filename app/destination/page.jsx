import MotionBackground from '@/components/MotionBackground';

const Destination = () => {
	return (
		<main className="h-screen overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop"
				backgroundPositon="bg-top"
			/>
		</main>
	);
};

export default Destination;
