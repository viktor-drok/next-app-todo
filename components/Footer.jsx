import Link from "next/link";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="flex justify-evenly p-2 items-center bg-footer-bg">
			<h4>Created by Viktor Drok</h4>
			<ul className="flex gap-4">
				<li>
					<Link
						href="https://t.me/viktor_drok"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FaTelegramPlane color="#1c93e3" />
					</Link>
				</li>

				<li>
					<Link
						href="https://github.com/viktor-drok"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FaGithub />
					</Link>
				</li>

				<li>
					<Link
						href="https://viktor-drok-cv.netlify.app/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<BsFillFileEarmarkPersonFill />
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Footer;
