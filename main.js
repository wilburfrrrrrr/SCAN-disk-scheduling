// import { scan_scheduling } from "./algorithms/scan/scan";
// import { plot_sequence } from "./ui/plot";
const { scan_scheduling } = require("./algorithms/scan/scan");
const { plot_sequence } = require("./ui/plot");

let request = [ 89, 183, 37, 122, 14, 124, 65, 67];
let seek_sequence = scan_scheduling(request);
plot_sequence(seek_sequence);