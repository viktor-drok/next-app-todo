"use client";

import dynamic from "next/dynamic";

const CustomButton = dynamic(() => import("./CustomButton"), { ssr: false });

import Link from "next/link";
import { useTodos } from "@/state/todos";

const ToDosByDay = () => {
	const todos = useTodos(state => state.todos);

	const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return (
		<div className="flex flex-col items-center justify-center text-center gap-[22px] mt-[22px]">
			{dayOfWeek.map(day => (
				<Link
					href={`/${day.toLowerCase()}`}
					key={day}
				>
					<CustomButton className="bg-gradient-to-r from-[#7FDB88] from-0% to-[#FFD7A7] to-0% flex justify-between px-4">
						{day}
						<span>{todos.filter(todo => todo.day?.toLowerCase() === day?.toLowerCase()).length}</span>
					</CustomButton>
				</Link>
			))}
		</div>
	);
};
export default ToDosByDay;
