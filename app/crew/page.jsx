'use client';
import { useEffect, useState } from 'react';
import MotionBackground from '@/components/MotionBackground';
import { Pagination } from '@nextui-org/react';

const Crew = () => {
	const [crewData, setCrewData] = useState(null);
	const [activeTab, setActiveTab] = useState(0);

	const handleSetActiveTab = (index) => {
		setActiveTab(index - 1);
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json');
			const data = await response.json();
			setCrewData(data);
		};
		fetchData();
	}, []);

	const renderItem = ({ ref, key, value, isActive, setPage, className }) => {
		return (
			<li
				key={key}
				ref={ref}
				className={`relative w-[15px] h-[15px] mx-[12px] lg:mr-[24px] lg:ml-0 cursor-pointer !overflow-visible ${className} before:absolute before:inline-flex before:h-full before:w-full before:bg-white before:rounded-full ${
					isActive
						? 'bg-white before:animate-ping'
						: 'opacity-10 hover:opacity-50'
				}`}
				onClick={() => setPage(value)}
			></li>
		);
	};

	return (
		<main className="overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop"
				backgroundPositon="bg-top"
			/>
			<div className="main-container relative container mx-auto flex flex-col justify-evenly lg:justify-between">
				<div className="w-full text-center lg:flex lg:justify-between">
					<h5 className="subtitle !mb-0">
						<span>02</span>Meet your crew
					</h5>
				</div>
				{crewData && (
					<div className="flex items-end">
						{crewData.crew &&
							crewData.crew.map((person, index) => (
								<div
									className={`flex flex-col justify-center items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left w-full ${
										activeTab === index ? '' : 'hidden'
									}`}
									key={index}
								>
									<div className="lg:w-[60%] mb-10 md:mb-20 order-2 md:order-1">
										<h5 className="subtitle lg:mb-28"></h5>
										<h4 className="h4">{person.role}</h4>
										<h3 className="h3">{person.name}</h3>
										<p className="max-w-[444px] min-h-[100px] md:min-h-[140px] font-Barlow text-sm md:text-[15px] md:text-lg text-light mb-8 md:mb-12 lg:mb-28 tracking-[1px]">
											{person.bio}
										</p>
										<Pagination
											page={activeTab + 1}
											onChange={handleSetActiveTab}
											total={crewData.crew.length}
											radius="full"
											size="sm"
											renderItem={renderItem}
											disableCursorAnimation
											className="flex items-center justify-center lg:justify-start"
										/>
									</div>

									<div className="w-[60%] lg:w-[40%] max-h-[600px] min-h-[305px] lg:min-h-[600px] h-100 order-1 md:order-2 flex">
										<img
											className="mx-auto mb-0 mt-auto"
											src={person.images.webp}
											alt={person.name}
										/>
										<hr className="border-[#383B4B] lg:hidden" />
									</div>
								</div>
							))}
					</div>
				)}
			</div>
		</main>
	);
};

export default Crew;
