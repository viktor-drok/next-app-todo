import Header from "../components/Header";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefineSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Next.js ToDo",
	description: "Generated by Viktor Drok",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={josefineSans.className}>
				<div className="flex flex-col h-full">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
