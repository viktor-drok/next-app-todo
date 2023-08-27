import SideBar from "@/components/SideBar";

export default function Home() {
	return (
		<main className="flex bg-main-bg grow">
			<SideBar />
			<div className="text-center text-[32px] pt-[23px] font-bold w-full">Select a day to get started...</div>
		</main>
	);
}
