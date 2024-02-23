import ExploreButton from '@/components/ExploreButton';
import MotionBackground from '@/components/MotionBackground';

export default function Home() {
	return (
		<main className="overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop"
				backgroundPositon="bg-bottom lg:bg-right"
			/>
			<div className="main-container relative container mx-auto flex items-center lg:items-end">
				<div className="flex flex-col justify-center items-center text-center mb-12 md:mb-24 lg:flex-row lg:items-end lg:justify-between lg:text-left lg:mb-32 w-full">
					<div className="max-w-[450px] mb-20 sm:mb-40 md:mb-10 lg:mb-0">
						<h5 className="h5 tracking-[4px]">
							SO, YOU WANT TO TRAVEL TO
						</h5>
						<h1 className="h1">SPACE</h1>
						<p className="font-Barlow text-[15px] md:text-lg text-light tracking-[1px]">
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</p>
					</div>
					<div>
						<ExploreButton />
					</div>
				</div>
			</div>
		</main>
	);
}
