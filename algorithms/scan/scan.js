
const set_direction = (head, left_sequence, right_sequence) => {
	let direction = ''
	let right_start = right_sequence[0];
	let left_start = left_sequence[left_sequence.length - 1];

	if (Math.abs(head - right_start) > Math.abs(head - left_start)) direction = 'left';
	else direction = 'right';	

	return direction;
};

const scan_scheduling = (request) => {
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

module.exports = { scan_scheduling };