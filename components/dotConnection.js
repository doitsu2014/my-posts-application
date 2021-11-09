import React, { useRef } from 'react';
import { chain } from 'lodash';

class DotConnection extends React.Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();

		this.state = {
			canvas: null,
			canvasContext: null,
			numberOfStars: 0,
			stars: [],
			FPS: props.FPS || 80,
			mouse: { x: 0, y: 0 },
		};
	}

	render() {
		return (
			<div className="absolute w-full z-0">
				<canvas ref={this.canvasRef} className="bg-opacity-0"></canvas>
			</div>
		)
	}

	componentDidMount() {
		window.addEventListener('mousemove', (evt) => {
			this.setState({
				mouse: {
					x: evt.clientX + window.scrollX,
					y: evt.clientY + window.scrollY
				}
			});
		});

		this.setState(state => {
			state.canvas = this.canvasRef.current;
			state.canvas.width = window.innerWidth;
			state.canvas.height = window.document.querySelector('body').clientHeight;
			state.numberOfStars = parseInt((state.canvas.height + state.canvas.width) / 10);
			const initialStars = [];
			for (var i = 0; i < state.numberOfStars; i++) {
				initialStars.push({
					x: Math.random() * state.canvas.width,
					y: Math.random() * state.canvas.height,
					radius: Math.random() * 1 + 1,
					vx: Math.floor(Math.random() * 50) - 25,
					vy: Math.floor(Math.random() * 50) - 25
				});
			}
			state.stars = initialStars;
			state.canvasContext = state.canvas.getContext('2d')
			return state;
		});


		// Update and draw
		const tick = () => {
			if (this.state.canvasContext) {
				this.draw();
				this.update();
			}
			requestAnimationFrame(tick);
		}
		tick();
	}

	draw() {
		this.state.canvasContext.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
		this.state.canvasContext.globalCompositeOperation = "lighter";

		for (var i = 0, x = this.state.stars.length; i < x; i++) {
			const s = this.state.stars[i];
			this.state.canvasContext.fillStyle = "#000";
			this.state.canvasContext.beginPath();
			this.state.canvasContext.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
			this.state.canvasContext.fill();
			this.state.canvasContext.fillStyle = 'white';
			this.state.canvasContext.stroke();
		}

		this.state.canvasContext.beginPath();
		for (var i = 0, x = this.state.stars.length; i < x; i++) {
			let starI = this.state.stars[i];
			this.state.canvasContext.moveTo(starI.x, starI.y);
			if (this.distance(this.state.mouse, starI) < 150) this.state.canvasContext.lineTo(this.state.mouse.x, this.state.mouse.y);
			for (var j = 0, x = this.state.stars.length; j < x; j++) {
				let starII = this.state.stars[j];
				if (this.distance(starI, starII) < 150) {
					//this.state.canvasContext.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
					this.state.canvasContext.lineTo(starII.x, starII.y);
				}
			}
		}
		this.state.canvasContext.lineWidth = 0.03;
		this.state.canvasContext.strokeStyle = 'black';
		this.state.canvasContext.stroke();
	}

	distance(point1, point2) {
		var xs = 0;
		var ys = 0;

		xs = point2.x - point1.x;
		xs = xs * xs;

		ys = point2.y - point1.y;
		ys = ys * ys;

		return Math.sqrt(xs + ys);
	}

	// Update star locations
	update() {
		for (var i = 0, x = this.state.stars.length; i < x; i++) {
			var s = this.state.stars[i];

			s.x += s.vx / this.state.FPS;
			s.y += s.vy / this.state.FPS;

			if (s.x < 0 || s.x > this.state.canvas.width) s.vx = -s.vx;
			if (s.y < 0 || s.y > this.state.canvas.height) s.vy = -s.vy;
		}
	}

}

export default DotConnection;