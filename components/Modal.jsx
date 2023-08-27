"use client";

import { useTodos } from "@/state/todos";
import { useState } from "react";

const Modal = () => {
	const addTodo = useTodos(state => state.addTodo);
	const closeModal = useTodos(state => state.closeModal);

	const [title, setTitle] = useState("");
	const [priority, setPriority] = useState("high");

	const handleSubmit = e => {
		e.preventDefault();
		addTodo(title, priority);
		closeModal();
		setTitle("");
	};
	return (
		<div
			onClick={e => e.stopPropagation()}
			className="absolute z-10 bg-details-bg rounded-lg w-[50%] h-[50%] p-4"
		>
			<h3>Details</h3>
			<form className="flex flex-col gap-2">
				<label className="text-start">
					<span className="text-start">Enter Title</span>
					<input
						className="w-full rounded-lg p-1"
						type="text"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</label>

				<label className="text-start">
					<span>Select Priority</span>
					<select
						className="w-full rounded-lg p-1"
						name="priority"
						type="text"
						required
						autoComplete="priority"
						onChange={e => setPriority(e.target.value)}
						value={priority}
					>
						<option value="high">High Priority</option>
						<option value="medium">Medium Priority</option>
						<option value="low">Low Priority</option>
					</select>
				</label>

				<button
					disabled={title.trim() === "" ? true : false}
					className="bg-save-bg rounded-lg p-1 text-white my-5 disabled:bg-delete-bg"
					type="submit"
					onClick={handleSubmit}
				>
					Save
				</button>
			</form>
		</div>
	);
};
export default Modal;
