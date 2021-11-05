import React, { useRef } from 'react';

class DotConnection extends React.Component {
	constructor(props) {
		super(props);
		this.canvasRef = null;
		this.setCanvasRef = ele => this.canvasRef = ele;
		this.stars = []; // Array that contains the stars
		this.FPS = 80 // Frames per second
		this.mouse = {
			x: 0,
			y: 0
		};  // mouse location
		this.numberOfStars = 250;
	}

	componentDidMount() {
		window.addEventListener('mousemove', (evt) => {
			this.mouse.x = evt.clientX + window.scrollX;
			this.mouse.y = evt.clientY + window.scrollY;
		});

		this.canvas = this.canvasRef;
		this.canvasContext = this.canvas.getContext('2d');
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.document.querySelector('body').clientHeight;

		// Push stars to array
		for (var i = 0; i < this.numberOfStars; i++) {
			this.stars.push({
				x: Math.random() * this.canvas.width,
				y: Math.random() * this.canvas.height,
				radius: Math.random() * 1 + 1,
				vx: Math.floor(Math.random() * 50) - 25,
				vy: Math.floor(Math.random() * 50) - 25
			});
		}

		// Update and draw
		const tick = () => {
			this.draw();
			this.update();
			requestAnimationFrame(tick);
		}
		tick();
	}

	draw() {
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvasContext.globalCompositeOperation = "lighter";

		for (var i = 0, x = this.stars.length; i < x; i++) {
			const s = this.stars[i];
			this.canvasContext.fillStyle = "#000";
			this.canvasContext.beginPath();
			this.canvasContext.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
			this.canvasContext.fill();
			this.canvasContext.fillStyle = 'white';
			this.canvasContext.stroke();
		}

		this.canvasContext.beginPath();
		for (var i = 0, x = this.stars.length; i < x; i++) {
			let starI = this.stars[i];
			this.canvasContext.moveTo(starI.x, starI.y);
			if (this.distance(this.mouse, starI) < 150) this.canvasContext.lineTo(this.mouse.x, this.mouse.y);
			for (var j = 0, x = this.stars.length; j < x; j++) {
				var starII = this.stars[j];
				if (this.distance(starI, starII) < 150) {
					//this.canvasContext.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
					this.canvasContext.lineTo(starII.x, starII.y);
				}
			}
		}
		this.canvasContext.lineWidth = 0.15;
		this.canvasContext.strokeStyle = 'black';
		this.canvasContext.stroke();
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
		for (var i = 0, x = this.stars.length; i < x; i++) {
			var s = this.stars[i];

			s.x += s.vx / this.FPS;
			s.y += s.vy / this.FPS;

			if (s.x < 0 || s.x > this.canvas.width) s.vx = -s.vx;
			if (s.y < 0 || s.y > this.canvas.height) s.vy = -s.vy;
		}
	}

	render() {
		return (
			<div className="absolute w-full z-0">
				<canvas ref={this.setCanvasRef} className="bg-opacity-0"></canvas>
			</div>
		)
	}
}

export default DotConnection;