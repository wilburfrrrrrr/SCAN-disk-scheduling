const { scan_scheduling } = require("./algorithms/scan/scan");
const { plot_sequence } = require("./ui/plot");

const prompt = require('prompt-sync')();

const define_request = () => {
	let request = [];
	let continue_loop = 's'
	while (continue_loop === 's') {
		let track = parseInt(prompt('Ingrese el track -> '));
		request.push(track);
		continue_loop = prompt('Desea continuar? s/n -> ');
	}
	return request;
};

let request = define_request();
let seek_sequence = scan_scheduling(request);
plot_sequence(seek_sequence);