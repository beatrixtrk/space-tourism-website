'use client';
import MotionBackground from '@/components/MotionBackground';
import { Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const Technology = () => {
	const [technologyData, setTechnologyData] = useState(null);
	const [activeTab, setActiveTab] = useState(null);

	const renderItem = ({ ref, key, value, isActive, setPage, className }) => {
		return (
			<li
				key={key}
				ref={ref}
				className={`${className} w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] mx-[8px] mb-[26px] md:mb-[44px] lg:my-[16px] lg:mx-0 cursor-pointer border-white border font-Bellefair bg-transparent text-[24px] ${
					isActive ? 'bg-white text-dark' : 'text-white '
				}`}
				onClick={() => setPage(value)}
			>
				{value}
			</li>
		);
	};

	const handleSetActiveTab = (index) => {
		setActiveTab(index - 1);
	};

	useEffect(() => {
		setActiveTab(0);
		const fetchData = async () => {
			const res = await fetch('/data.json');
			const data = await res.json();
			setTechnologyData(data);
		};

		fetchData();
	}, []);

	return (
		<main className="overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-technologyMobile md:bg-technologyTablet lg:bg-technologyDesktop"
				backgroundPositon="bg-top"
			/>
			<div className="main-container relative lg:container mx-auto flex flex-col lg:justify-between">
				<div className="w-full text-center lg:flex lg:justify-between">
					<h5 className="subtitle">
						<span>03</span>SPACE LAUNCH 101
					</h5>
				</div>

				{technologyData && (
					<div className="flex items-center">
						{technologyData.technology &&
							technologyData.technology.map((item, index) => (
								<div
									className={`flex flex-col justify-start items-center text-center mb-2 md:mb-10 lg:flex-row lg:items-center lg:justify-between lg:text-left xl:mb-32 w-full lg:gap-20 ${
										activeTab === index ? '' : 'hidden'
									}`}
									key={index}
								>
									<div className="order-2 lg:order-1">
										<Pagination
											page={activeTab + 1}
											onChange={handleSetActiveTab}
											total={
												technologyData.technology.length
											}
											size="lg"
											radius="full"
											className="technology-pagination"
											renderItem={renderItem}
											disableCursorAnimation
										/>
									</div>
									<div className="order-3 lg:order-2">
										<span className="text-base text-light tracking-[2px] font-BarlowCondensed uppercase mb-3 md:mb-2">
											The Terminology ...
										</span>
										<h3 className="h3 mb-3">{item.name}</h3>
										<p className="max-w-[444px] px-3 font-Barlow text-sm md:text-[15px] md:text-lg text-light ">
											{item.description}
										</p>
									</div>
									<div className="lg:w-[515px] lg:h-[527px] order-1 lg:order-3 mb-8 md:mb-14 lg:mb-0">
										<img
											className="mx-auto hidden lg:block object-cover w-full h-full"
											src={item.images.portrait}
											alt={item.name}
										/>
										<img
											className="mx-auto lg:hidden"
											src={item.images.landscape}
											alt={item.name}
										/>
									</div>
								</div>
							))}
					</div>
				)}
			</div>
		</main>
	);
};

export default Technology;
