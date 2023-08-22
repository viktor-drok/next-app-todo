import CreateNewProject from "./CreateNewProject";

const SideBar = () => {
	return (
		<aside className="flex flex-col items-center justify-center text-center text-[32px] pt-[23px] font-bold min-w-[300px] bg-aside-bg">
			<h2>Projects</h2>

			<CreateNewProject />
		</aside>
	);
};
export default SideBar;
