import DotConnection from "./dotConnection";
import NavBar from "./navigation/navigationBar";
import { useState, useEffect } from "react";
import Footer from "./footer";

export default function Layout({ children }) {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		setWindowWidth(window.screen.width);

		const handleWindowResize = _ => {
			setWindowWidth(window.screen.width);
		};
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		}
	}, [])

	return (
		<>
			{windowWidth >= 768 && <DotConnection magicPoint={60} />}
			<div className="relative z-10">
				<NavBar />
				<main className="w-full pt-2 pb-8 bg-gray-300 bg-opacity-50">{children}</main>
				<Footer />
			</div>
		</>
	);
}