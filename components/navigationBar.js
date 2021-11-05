import Link from 'next/link'

export default function NavBar() {
	return (
		<>
			<div className="w-full bg-black text-white text-sm">
				<div className="container mx-auto py-2 flex flex-row-reverse">
					<form className="">
						<input className="px-4 py-2 shadow-md rounded-lg placeholder-gray-500 border border-transparent text-black focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" name="txtSearchValue" placeholder="Search ~~~~~~~~~~~~~>" />
						<button className="px-4 py-2 my-2 mx-4 hover:bg-white hover:text-black hover:rounded-full">
							(╯°□°）╯︵ ┻━┻))
						</button>
					</form>
				</div>
			</div>
			<div className="w-full bg-gray-300 bg-opacity-50 text-black text-xl font-bold">
				<div className="container py-4 mx-auto flex justify-between">
					<div className="box-content">
						<Link href="/">
							<a>
								<img src="/rectangle/logo_transparent_background.png" alt="Doitsu Technology Logo" className="object-scale-down h-32" />
							</a>
						</Link>
					</div>
					<nav className="grid grid-flow-col auto-cols-max justify-end">
						<Link href="/posts/first-post">
							<a className="self-center px-2 py-2 mx-4 hover:bg-black hover:text-white hover:rounded-md">
								React
							</a>
						</Link>
						<Link href="/posts/first-post">
							<a className="self-center px-2 py-2 mx-4 hover:bg-black hover:text-white hover:rounded-md">
								C#
							</a>
						</Link>
						<Link href="/posts/first-post">
							<a className="self-center px-2 py-2 mx-4 hover:bg-black hover:text-white hover:rounded-md">
								Rust
							</a>
						</Link>
						<Link href="/posts/first-post">
							<a className="self-center px-4 py-4 hover:bg-black hover:text-white hover:rounded-md">
								About me
							</a>
						</Link>
					</nav>
				</div>
			</div>
			{/* <hr className="border-gray-200 mx-auto md:w-3/4 sm:w-full" /> */}
		</>
	);
}