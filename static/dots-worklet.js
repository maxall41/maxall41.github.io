class Dots {
	static get inputProperties() {
		return ['--circle-color', '--circle-size', '--circle-spacing', '--circle-secondary-color'];
	}

	paint(ctx, geometry, properties) {
		const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

		let size = properties.get('--circle-size').value;
		let spacing = properties.get('--circle-spacing').value;
		let x = 0;
		let y = 0;
		let { width, height } = geometry;
		ctx.beginPath();
		while (y < height - size) {
			while (x < width - size) {
				ctx.moveTo(x, y);
				var color = '';
				color = properties.get('--circle-color');

				this.drawCircle(ctx, {
					x: x,
					y: y,
					r: size,
					color: color,
					alpha: 100
				});
				x += spacing;
			}
			x = 0;
			y += spacing;
		}
	}

	drawCircle(ctx, properties) {
		ctx.globalAlpha = properties.alpha / 100;
		ctx.beginPath();
		ctx.arc(properties.x, properties.y, properties.r / 2, 0, 2 * Math.PI, !0);
		ctx.fillStyle = properties.color;
		ctx.fill();
		ctx.closePath();
	}
}
console.log('Register');
registerPaint('dots', Dots);
