import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex justify-center items-center bg-header-bg text-[38px] p-5 leading-none font-semibold gap-2">
			<Image
				src="/images/todo-icon.svg"
				alt="ToDo Image"
				width={72}
				height={60}
			/>
			<Link href="/">
				<h1>YourTodo</h1>
			</Link>
		</header>
	);
};
export default Header;
