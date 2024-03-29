'use client';
import MotionBackground from '@/components/MotionBackground';
import { Link } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Destination = () => {
	const [destinationData, setDestinationData] = useState(null);
	const [activeTab, setActiveTab] = useState(null);

	const handleSetActiveTab = (index) => {
		setActiveTab(index);
	};

	useEffect(() => {
		setActiveTab(0);
		const fetchData = async () => {
			const response = await fetch('/data.json');
			const data = await response.json();
			setDestinationData(data);
		};

		fetchData();
	}, []);

	return (
		<main className="overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop"
				backgroundPositon="bg-top"
			/>
			<div className="main-container relative container mx-auto flex flex-col justify-evenly lg:justify-between">
				<div className="w-full text-center lg:flex lg:justify-between">
					<h5 className="subtitle">
						<span>01</span>Pick your destination
					</h5>
				</div>
				{destinationData && (
					<div className="flex items-end lg:min-h-[600px]">
						{destinationData.destinations &&
							destinationData.destinations.map(
								(destination, index) => (
									<div
										className={`flex flex-col justify-center items-center text-center mb-2 md:mb-10 lg:flex-row lg:items-end lg:justify-between lg:text-left xl:mb-32 w-full md:gap-20 lg:gap-40 ${
											activeTab === index ? '' : 'hidden'
										}`}
										key={index}
									>
										<div className="max-w-[445px] w-full mb-6">
											<img
												className="max-w-[100px] md:max-w-[200px] lg:max-w-[445px] mx-auto"
												src={destination.images.png}
												alt={destination.name}
											/>
										</div>

										<div className="max-w-[445px] w-full">
											<div className="flex items-center justify-center lg:justify-start gap-[26px] md:gap-[35px]">
												{destinationData.destinations &&
													destinationData.destinations.map(
														(
															destination,
															index
														) => (
															<Link
																key={`tab-${index}`}
																aria-label={
																	destination.name
																}
																className="hover:cursor-pointer relative pb-2 md:pb-3"
																onClick={() =>
																	handleSetActiveTab(
																		index
																	)
																}
															>
																<span
																	className={`font-BarlowCondensed uppercase text-light text-sm md:text-base tracking-[2px] md:tracking-[3px] ${
																		activeTab ===
																		index
																			? 'active text-white'
																			: ''
																	}`}
																>
																	{
																		destination.name
																	}
																	{activeTab ===
																		index && (
																		<motion.span
																			key={`tab-${index}`}
																			initial={{
																				y: '-100%',
																			}}
																			animate={{
																				y: 0,
																			}}
																			transition={{
																				type: 'tween',
																			}}
																			layoutId={`tabUnderline-${index}`}
																			className="absolute left-0 top-[calc(100%-2px)] h-[2px] bg-white w-full"
																		/>
																	)}
																</span>
															</Link>
														)
													)}
											</div>
											<h2 className="h2">
												{destination.name}
											</h2>
											<p className="font-Barlow text-sm md:text-[15px] md:text-lg text-light mb-8 md:mb-12 lg:mb-14 tracking-[1px]">
												{destination.description}
											</p>
											<hr className="border-[#383B4B] mb-8 md:mb-7" />
											<div className="md:flex md:justify-between md:items-center">
												<div>
													<p className="subheading-2">
														Avg. Distance
													</p>
													<p className="subheading-1">
														{destination.distance}
													</p>
												</div>
												<div>
													<p className="subheading-2">
														Est. Travel Time
													</p>
													<p className="subheading-1">
														{destination.travel}
													</p>
												</div>
											</div>
										</div>
									</div>
								)
							)}
					</div>
				)}
			</div>
		</main>
	);
};

export default Destination;
