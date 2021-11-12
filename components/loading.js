export default function Loading() {
	return (
		<div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-gray-100 to-gray-500 bg-opacity-10">
			<div className="bg-black p-5 rounded-full flex space-x-3">
				<div className="w-4 h-4 bg-gray-200 rounded-full animate-bounce-fast"></div>
				<div className="w-4 h-4 bg-gray-200 rounded-full animate-bounce-medium"></div>
				<div className="w-4 h-4 bg-gray-200 rounded-full animate-bounce-slow"></div>
			</div>
		</div>
	);
}