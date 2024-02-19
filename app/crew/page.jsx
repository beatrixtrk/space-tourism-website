'use client';
import MotionBackground from '@/components/MotionBackground';
import { useEffect, useState } from 'react';
import { Pagination } from '@nextui-org/react';

const Crew = () => {
	const [jsonData, setJsonData] = useState(null);
	const [activeTab, setActiveTab] = useState(0);

	const renderItem = ({ ref, key, value, isActive, setPage, className }) => {
		return (
			<li
				key={key}
				ref={ref}
				className={`w-[15px] h-[15px] mx-[12px] lg:mr-[24px] lg:ml-0 cursor-pointer ${className} ${
					isActive ? 'bg-white' : 'opacity-10'
				}`}
				onClick={() => setPage(value)}
			></li>
		);
	};

	const handleSetActiveTab = (index) => {
		setActiveTab(index - 1);
	};

	useEffect(() => {
		setActiveTab(0);
		const fetchData = async () => {
			const response = await fetch('/data.json');
			const data = await response.json();
			setJsonData(data);
		};
		fetchData();
	}, []);
	return (
		<main className="h-screen overflow-hidden relative animate-appearanceIn">
			<MotionBackground
				backgroundImage="bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop"
				backgroundPositon="bg-top"
			/>

			<div className="min-h-screen relative container mx-auto flex flex-col justify-end">
				<div className="w-full text-center lg:flex lg:justify-between">
					<h5 className="subtitle">
						<span>02</span>Meet your crew
					</h5>
				</div>
				{jsonData && (
					<div className="flex items-end">
						{jsonData.crew &&
							jsonData.crew.map((person, index) => (
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
										<p className="max-w-[444px] font-Barlow text-sm md:text-[15px] md:text-lg text-light mb-8 md:mb-12 lg:mb-28">
											{person.bio}
										</p>
										<Pagination
											page={activeTab + 1}
											onChange={handleSetActiveTab}
											total={jsonData.crew.length}
											radius="full"
											size="sm"
											renderItem={renderItem}
											disableCursorAnimation
											className="flex items-center justify-center lg:justify-start"
										/>
									</div>

									<div className="w-[60%] lg:w-[40%] order-1 md:order-2">
										<img
											className="mx-auto"
											src={person.images.png}
											alt={person.name}
										/>
										<hr className="border-[#383B4B]" />
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
