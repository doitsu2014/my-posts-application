import Link from "next/link";

export default function FirstPost() {
	return (
		<>
			<h1 className="text-lg">
				Crypto Industry	
			</h1>
			<Link href="/">
				<a>
					<p>Back to Home</p>
				</a>
			</Link>
		</>
	);

}