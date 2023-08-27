"use client";

import dynamic from "next/dynamic";

const PriorityItem = dynamic(() => import("@/components/PriorityItem"), { ssr: false });

const Page = ({ params }) => {
	const priority = ["High", "Medium", "Low"];

	return (
		<div className="w-full bg-main-bg px-7">
			<div className="flex flex-col">
				<h2 className="first-letter:uppercase text-[32px] text-center font-bold py-10">{params.day}</h2>

				<div className="flex flex-col items-center gap-9 my-7">
					{priority.map(item => {
						return (
							<PriorityItem
								key={item}
								priority={item}
								day={params.day}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Page;
