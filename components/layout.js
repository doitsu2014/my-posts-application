import DotConnection from "./dotConnection";
import NavBar from "./navigation/navigationBar";
import { isMobile } from "react-device-detect";

export default function Layout({ children }) {
	return (
		<>
			{!isMobile && <DotConnection magicPoint={60} />}
			<div className="relative z-10">
				<NavBar />
				<main className="w-full pt-2 pb-8 bg-gray-300 bg-opacity-50">{children}</main>
				<footer className="flex items-center justify-center w-full border-t bg-black text-white">
					<a
						className="flex items-center justify-center"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by{' '}
						<img src="/square/white_logo_transparent_background.png" alt="D.TECH Logo" className="h-32 ml-4" />
					</a>
				</footer>
			</div>
		</>
	);
}