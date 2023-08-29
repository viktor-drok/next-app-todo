"use client";

import dynamic from "next/dynamic";

const CustomButton = dynamic(() => import("./CustomButton"), { ssr: false });

import Link from "next/link";
import { useTodos } from "@/state/todos";
import { useRouter } from "next/navigation";

const ToDosByDay = () => {
	const todos = useTodos(state => state.todos);

	const router = useRouter();

	const filteredByDay = day => todos.filter(todo => todo.day.toLowerCase() === day.toLowerCase());

	const filteredByDayAndCompleted = day => filteredByDay(day).filter(todo => todo.completed === true);

	const styleButton = day => {
		const gradient = (filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length;

		return gradient;
	};

	const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return (
		<div className="flex flex-col items-center justify-center text-center gap-[22px] mt-[22px]">
			{dayOfWeek.map(day => (
				<Link
					href={`/${day.toLowerCase()}`}
					key={day}
				>
					<CustomButton
						style={{
							background: `linear-gradient(90deg, rgba(127, 219, 136, 1) ${styleButton(
								day,
							)}%, rgba(255, 215, 167, 1) ${styleButton(day)}%)`,
						}}
						className="justify-between px-4 bg-details-bg transition-all"
						onDragEnter={e => {
							e.preventDefault();
							router.push(`/${day.toLowerCase()}`);
						}}
					>
						{day}
						<div className="flex gap-4">
							<span>{filteredByDay(day).length}</span>
							<span>
								{`${
									Number.isNaN((filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length)
										? 0
										: Math.round((filteredByDayAndCompleted(day).length * 100) / filteredByDay(day).length)
								}%`}
							</span>
						</div>
					</CustomButton>
				</Link>
			))}
		</div>
	);
};
export default ToDosByDay;
