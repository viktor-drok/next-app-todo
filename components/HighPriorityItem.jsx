"use client";

import { FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useTodos } from "@/state/todos";

const HighPriorityItem = () => {
	const todos = useTodos(state => state.todos);
	const modal = useTodos(state => state.modal);
	const deleteTodo = useTodos(state => state.deleteTodo);
	const filteredTodos = todos.filter(todo => todo.priority === "high");

	return (
		<div className="text-center text-[26px] font-semibold leading-normal bg-highPrior-bg w-full rounded-lg p-1">
			<h3>High Priority Item</h3>
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
			{modal && (
				<div className="absolute top-0 left-0 w-full h-full bg-[#000000aa] flex items-center justify-center">
					<Modal />
				</div>
			)}
		</div>
	);
};
export default HighPriorityItem;
