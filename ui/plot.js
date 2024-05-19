import { plot } from 'nodeplotlib';


export const plot_sequence = (sequence) => {
	let x = [];
	let y = [];
	for (let i = 0; i < sequence.length; i++) {
		x.push(i);
		y.push(sequence[i]);
	}
	const data = [{ x: x, y: y, type: 'scatter' }];
	plot(data);
}

