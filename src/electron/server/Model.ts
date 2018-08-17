class Label {
	title: string;
	id: string;
}

class Thread {
	subject: string;
	from: string;
	date: Date;
	snippet: string;
	id: string;
	labels: string[];
}

export { Label, Thread };
