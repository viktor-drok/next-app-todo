// import CreateNewProject from "./CreateNewProject";
import AddNewItem from "./AddNewItem";
import ToDosByDay from "./ToDosByDay";

const SideBar = () => {
	return (
		<aside className="flex flex-col justify-start text-center text-[32px] pt-[23px] font-bold min-w-[300px] bg-aside-bg items-center">
			<h2>Projects</h2>

			<AddNewItem />

			<ToDosByDay />
		</aside>
	);
};
export default SideBar;
