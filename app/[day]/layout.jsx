import SideBar from "@/components/SideBar";
import { ToastContainer } from "react-toastify";

export default function DayLayout({ children }) {
	return (
		<main className="flex h-full grow">
			<SideBar />
			{children}
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</main>
	);
}
