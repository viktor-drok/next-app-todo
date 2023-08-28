"use client";

import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Modal from "./Modal";
import { useTodos } from "@/state/todos";

const PriorityItem = ({ priority, day }) => {
	const todos = useTodos(state => state.todos);
	const modal = useTodos(state => state.modal);
	const closeModal = useTodos(state => state.closeModal);
	const deleteTodo = useTodos(state => state.deleteTodo);
	const filteredByDay = todos?.filter(todo => todo.day?.toLowerCase() === day?.toLowerCase());
	const filteredTodos = filteredByDay.filter(todo => todo.priority?.toLowerCase() === priority?.toLowerCase());
	const setDeaggedTodo = useTodos(state => state.setDraggedTodo);
	const draggedTodo = useTodos(state => state.draggedTodo);
	const moveTodo = useTodos(state => state.moveTodo);
	const setDay = useTodos(state => state.setDay);
	const toggleCompleted = useTodos(state => state.toggleCompleted);
	const setIsCompleted = useTodos(state => state.setIsCompleted);

	return (
		<div
			className={`text-center text-[26px] font-semibold leading-normal 
			${
				priority?.toLowerCase() === "high"
					? "bg-highPrior-bg"
					: priority?.toLowerCase() === "medium"
					? "bg-medPrior-bg"
					: "bg-lowPrior-bg"
			} w-full rounded-lg p-1`}
		>
			<h3>{priority} Priority Item</h3>
			<ul
				className="text-[24px] bg-item-bg rounded-lg"
				onDragOver={e => e.preventDefault()}
				onDrop={() => {
					moveTodo(draggedTodo, priority, day);
					setDeaggedTodo(null);
					setDay(null);
				}}
			>
				{filteredTodos.length !== 0 ? (
					filteredTodos.map(todo => (
						<li
							className={`flex justify-between items-center p-2 cursor-move rounded-lg ${
								todo.completed ? "bg-completed-bg" : null
							}`}
							onDragStart={() => {
								setDay(todo.day);
								setDeaggedTodo(todo.title);
								setIsCompleted(todo.completed);
							}}
							draggable
							key={todo.id}
						>
							<h5>{todo.title}</h5>
							<div className="flex gap-6 cursor-pointer">
								<FaCheck onClick={() => toggleCompleted(todo.title)} />
								<FaTrashAlt onClick={() => deleteTodo(todo.id)} />
							</div>
						</li>
					))
				) : (
					<div className="flex justify-between items-center p-2">No ToDos</div>
				)}
			</ul>
			{modal && (
				<div
					onClick={() => closeModal()}
					className="absolute top-0 left-0 w-full h-full bg-[#00000070] flex items-center justify-center"
				>
					<Modal />
				</div>
			)}
		</div>
	);
};
export default PriorityItem;
