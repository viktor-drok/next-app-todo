"use client";

import { useTodos } from "@/state/todos";

const AddNewItem = () => {
	const openModal = useTodos(state => state.openModal);

	const handleOpenModal = () => {
		openModal();
	};

	return (
		<div
			onClick={handleOpenModal}
			className="flex justify-center items-center text-[26px] font-semibold text-[#353535] bg-newItem-bg rounded-lg p-4 leading-none cursor-pointer h-14 w-[254px]"
		>
			New Item
		</div>
	);
};
export default AddNewItem;
