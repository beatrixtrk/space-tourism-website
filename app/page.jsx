import MotionBackground from '@/components/MotionBackground';

export default function Home() {
	return (
		<main className="h-screen overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop"
				backgroundPositon="bg-bottom lg:bg-right"
			/>
		</main>
	);
}
