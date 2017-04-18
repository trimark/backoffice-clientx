export class UserAccountProperty {
	constructor(
		private id: number,
		private name: string,
		private value: string) { }

	getId(): number {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getValue(): string {
		return this.value;
	}
}
