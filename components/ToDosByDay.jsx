"use client";

import dynamic from "next/dynamic";

const CustomButton = dynamic(() => import("./CustomButton"), { ssr: false });

import Link from "next/link";
import { useTodos } from "@/state/todos";

const ToDosByDay = () => {
	const todos = useTodos(state => state.todos);

	const filteredByDay = day => todos.filter(todo => todo.day.toLowerCase() === day.toLowerCase());

	const filteredByDayAndCompleted = day => filteredByDay(day).filter(todo => todo.completed === true);

	const styleButton = day => {
		const gradient =
			Math.round((filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length) -
			(Math.round((filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length) % 5);

		return `justify-between px-4 bg-gradient-to-r from-[#7FDB88] from-${gradient}% to-[#FFD7A7] to-${gradient}%`;
	};

	//     `bg-gradient-to-r from-[#7FDB88] from-30% to-[#FFD7A7] to-30% flex justify-between px-4`

	const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return (
		<div className="flex flex-col items-center justify-center text-center gap-[22px] mt-[22px]">
			{dayOfWeek.map(day => (
				<Link
					href={`/${day.toLowerCase()}`}
					key={day}
				>
					<CustomButton className={styleButton(day)}>
						{day}
						<span>{filteredByDay(day).length}</span>
						<span>
							{(
								`${
									Math.round((filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length) -
									(Math.round((filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length) % 5)
								}` + "%"
							).replace('"', "")}
						</span>
						{/* {styleButton(day)} */}
					</CustomButton>
				</Link>
			))}
		</div>
	);
};
export default ToDosByDay;
// filteredByDay(day).length - 100%     ["5454%"]
// filteredByDayAndCompleted(day).length - x
//           ${(Math.ceil((filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length)).toString() + "%"}
