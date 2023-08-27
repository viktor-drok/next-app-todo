import { FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useTodos } from "@/state/todos";

const PriorityItem = ({ priority, day }) => {
	const todos = useTodos(state => state.todos);
	const modal = useTodos(state => state.modal);
	const deleteTodo = useTodos(state => state.deleteTodo);
	const filteredByDay = todos.filter(todo => todo.day.toLowerCase() === day.toLowerCase());
	const filteredTodos = filteredByDay.filter(todo => todo.priority.toLowerCase() === priority.toLowerCase());

	return (
		<div
			className={`text-center text-[26px] font-semibold leading-normal 
			${
				priority.toLowerCase() === "high"
					? "bg-highPrior-bg"
					: priority.toLowerCase() === "medium"
					? "bg-medPrior-bg"
					: "bg-lowPrior-bg"
			} w-full rounded-lg p-1`}
		>
			<h3>{priority} Priority Item</h3>
			<ul className="text-[24px] bg-item-bg rounded-lg">
				{filteredTodos.length !== 0 &&
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
				<div className="absolute top-0 left-0 w-full h-full bg-[#00000070] flex items-center justify-center">
					<Modal />
				</div>
			)}
		</div>
	);
};
export default PriorityItem;
