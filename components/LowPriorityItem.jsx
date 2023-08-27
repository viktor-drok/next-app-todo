"use client";

import { FaTrashAlt } from "react-icons/fa";
import { useTodos } from "@/state/todos";

const LowPriorityItem = () => {
	const todos = useTodos(state => state.todos);
	const modal = useTodos(state => state.modal);
	const deleteTodo = useTodos(state => state.deleteTodo);
	const filteredTodos = todos.filter(todo => todo.priority === "low");

	return (
		<div className="text-center text-[26px] font-semibold leading-normal bg-lowPrior-bg w-full rounded-lg p-1">
			<h3>Low Priority Item</h3>
			<ul className="text-[24px] bg-item-bg rounded-lg">
				{todos.length !== 0 &&
					filteredTodos.map(todo => (
						<li
							key={todo.id}
							className="flex justify-between items-center p-2"
						>
							<h5>{todo.title}</h5>
							<div
								className="cursor-pointer"
								onClick={() => deleteTodo(todo.id)}
							>
								<FaTrashAlt />
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};
export default LowPriorityItem;
