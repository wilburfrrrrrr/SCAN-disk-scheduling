

const set_direction = (head, left_sequence, right_sequence) => {
	let direction = ''
	let right_start = right_sequence[0];
	let left_start = left_sequence[left_sequence.length - 1];

	if (Math.abs(head - right_start) > Math.abs(head - left_start)) direction = 'left';
	else direction = 'right';	

	return direction;
};

export const scan_scheduling = (request) => {
	let head = request[0];
	let seek_sequence = [];
	let right = [];
	let left = [];
	let direction = '';
	let distance = 0;
	let current_track = head;

	for (let i = 0; i < request.length; i++) {
		if (request[i] < head) {
			left.push(request[i]);
		} else if (request[i] > head) {
			right.push(request[i]);
		}
	}

	left.sort((a, b) => a - b);
	right.sort((a, b) => a - b);

	direction = set_direction(head, left, right);

	seek_sequence.push(head);

	if (direction === 'left') {
		for (let i = left.length - 1; i >= 0; i--) {
			current_track = left[i];
			seek_sequence.push(current_track);
		}
		for (let i = 0; i < right.length; i++) {
			current_track = right[i];
			seek_sequence.push(current_track);
		}
	} else {
		for (let i = 0; i < right.length; i++) {
			current_track = right[i];
			seek_sequence.push(current_track);
		}
		for (let i = left.length - 1; i >= 0; i--) {
			current_track = left[i];
			seek_sequence.push(current_track);
		}
	}
	return seek_sequence;
};

request = [ 89, 183, 37, 122, 14, 124, 65, 67];

console.log(scan_scheduling(request));

exports.scan_scheduling = scan_scheduling;

// jobs = [ { arrival_time: 94 }, { arrival_time: 147 }, 
// 		{ arrival_time: 91 }, { arrival_time: 177 }, 
// 		{ arrival_time: 86 }, { arrival_time: 150 }, 
// 		{ arrival_time: 102 }, { arrival_time: 175 }, 
// 		{ arrival_time: 130 }, { arrival_time: 135 } ];

// console.log(scan_scheduling(jobs));