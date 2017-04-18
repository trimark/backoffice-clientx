export class Lottery {

	constructor(
		private name: string,
		private description: string,
		private modelName: string,
		private status: string,
		private created: string
	) { }

	getName(): string {
		return this.name;
	}

	getDescription(): string {
		return this.description;
	}

	getModelName(): string {
		return this.modelName;
	}

	getStatus(): string {
		return this.status;
	}

	getCreated(): string {
		return this.created;
	}
}
