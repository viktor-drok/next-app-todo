import SideBar from "@/components/SideBar";

export default function Home() {
	return (
		<main className="flex h-full bg-save-bg grow-1">
			<SideBar />
			<div className="grow-1">ToDo List</div>
		</main>
	);
}
