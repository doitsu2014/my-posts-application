import { useRef, useState, useEffect } from 'react';
import useAnimationFrame from 'use-animation-frame';

export default function DotConnection({ magicPoint }) {
	const canvasRef = useRef();
	const [state, setState] = useState({
		canvas: null,
		canvasContext: null,
		numberOfStars: 0,
		stars: [],
		magicPoint: magicPoint || 80,
		mouse: { x: 0, y: 0 },
	})

	useEffect(() => {
		initial();

		window.addEventListener('mousemove', handleWindowMouseMove);
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('mousemove', handleWindowMouseMove);
			window.removeEventListener('resize', handleWindowResize);
		}
	}, [])

	useAnimationFrame(() => {
		if (state.canvas && state.canvasContext) {
			draw();
			update();
		}
	});

	const handleWindowResize = () => {
		initial();
	}

	const handleWindowMouseMove = (evt) => {
		setState({
			...state,
			mouse: {
				x: evt.clientX + window.scrollX,
				y: evt.clientY + window.scrollY
			}
		});
	}

	const initial = () => {
		setState(state => {
			state.canvas = canvasRef.current;
			state.canvas.width = window.innerWidth;
			state.canvas.height = window.document.querySelector('body').clientHeight;
			state.numberOfStars = parseInt((state.canvas.height + state.canvas.width) / 10);
			const stars = [];
			for (var i = 0; i < state.numberOfStars; i++) {
				stars.push({
					x: Math.random() * state.canvas.width,
					y: Math.random() * state.canvas.height,
					radius: Math.random() * 1 + 1,
					vx: Math.floor(Math.random() * 50) - 25,
					vy: Math.floor(Math.random() * 50) - 25
				});
			}

			state.stars = stars;
			state.canvasContext = state.canvas.getContext('2d')
			return state;
		});
	}

	const draw = () => {
		state.canvasContext.clearRect(0, 0, state.canvas.width, state.canvas.height);
		state.canvasContext.globalCompositeOperation = "lighter";
		for (var i = 0, x = state.stars.length; i < x; i++) {
			const s = state.stars[i];
			state.canvasContext.fillStyle = "#000";
			state.canvasContext.beginPath();
			state.canvasContext.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
			state.canvasContext.fill();
			state.canvasContext.fillStyle = 'white';
			state.canvasContext.stroke();
		}
		state.canvasContext.beginPath();
		for (var i = 0, x = state.stars.length; i < x; i++) {
			let starI = state.stars[i];
			state.canvasContext.moveTo(starI.x, starI.y);
			if (distance(state.mouse, starI) < 150) state.canvasContext.lineTo(state.mouse.x, state.mouse.y);
			for (var j = 0, x = state.stars.length; j < x; j++) {
				let starII = state.stars[j];
				if (distance(starI, starII) < 150) {
					//state.canvasContext.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
					state.canvasContext.lineTo(starII.x, starII.y);
				}
			}
		}
		state.canvasContext.lineWidth = 0.03;
		state.canvasContext.strokeStyle = 'black';
		state.canvasContext.stroke();
	}

	const distance = (point1, point2) => {
		var xs = 0;
		var ys = 0;

		xs = point2.x - point1.x;
		xs = xs * xs;

		ys = point2.y - point1.y;
		ys = ys * ys;

		return Math.sqrt(xs + ys);
	}

	// Update star locations
	const update = () => {
		for (var i = 0, x = state.stars.length; i < x; i++) {
			let s = state.stars[i];
			s.x += s.vx / state.magicPoint;
			s.y += s.vy / state.magicPoint;
			if (s.x < 0 || s.x > state.canvas.width) s.vx = -s.vx;
			if (s.y < 0 || s.y > state.canvas.height) s.vy = -s.vy;
		}
	}

	return (
		<div className="absolute w-full z-0">
			<canvas ref={canvasRef} className="bg-opacity-0"></canvas>
		</div>
	);
}