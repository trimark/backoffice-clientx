export class LotteryModel {
	
	private gridRow: number;

	private gridColumn: number;

	private gridSize: number;
	
	private numOfLines: number;
	
	private numOfPrizes: number;
	
	private numOfMultipliers: number;
	
	private rowMatches: number;
	
	private columnMatches: number;
	
	private diagonalMatches: number;
	
	private multipliers: string;
	
	private nearWinsPairHigh: string;
	
	private nearWinsPairLow: string;
	
	private distinctWinPattern: string;
	
	private nearWinsPairProbabilityPct: string;
	
	private nearWinsPrizeProbabilityPct: string;
	
	private nearWinsMultiplierProbabilityPct: string;
	
	private winMechanic: string;
	
	private scratchMechanic: string;
	
	private matchMechanic: string;
	
	private anticipationControl:string;

	constructor(
		private id: number,
		private modelName: string,
		private variantName: string
	) { }

	getId(): number {
		return this.id;
	}

	getModelName(): string {
		return this.modelName;
	}

	getVariantName(): string {
		return this.variantName;
	}

	setGridRow(gridRow: number): void {
		this.gridRow = gridRow;
	}

	getGridRow(): number {
		return this.gridRow;
	}

	setGridColumn(gridColumn: number): void {
		this.gridColumn = gridColumn;
	}

	getGridColumn(): number {
		return this.gridColumn;
	}

	setGridSize(gridSize: number): void {
		this.gridSize = gridSize;
	}

	getGridSize(): number {
		return this.gridSize;
	}

	setNumOfLines(numOfLines: number): void {
		this.numOfLines = numOfLines;
	}

	getNumOfLines(): number {
		return this.numOfLines;
	}

	setNumOfPrizes(numOfPrizes: number): void {
		this.numOfPrizes = numOfPrizes;
	}

	getNumOfPrizes(): number {
		return this.numOfPrizes;
	}

	setNumOfMultipliers(numOfMultipliers: number): void {
		this.numOfMultipliers = numOfMultipliers;
	}

	getNumOfMultipliers(): number {
		return this.numOfMultipliers;
	}

	setRowMatches(rowMatches: number): void {
		this.rowMatches = rowMatches;
	}

	getRowMatches(): number {
		return this.rowMatches;
	}

	setColumnMatches(columnMatches: number): void {
		this.columnMatches = columnMatches;
	}

	getColumnMatches(): number {
		return this.columnMatches;
	}

	setDiagonalMatches(diagonalMatches: number): void {
		this.diagonalMatches = diagonalMatches;
	}

	getDiagonalMatches(): number {
		return this.diagonalMatches;
	}

	setMultipliers(multipliers: string): void {
		this.multipliers = multipliers;
	}

	getMultipliers(): string {
		return this.multipliers;
	}

	setNearWinsPairHigh(nearWinsPairHigh: string): void {
		this.nearWinsPairHigh = nearWinsPairHigh;
	}

	getNearWinsPairHigh(): string {
		return this.nearWinsPairHigh;
	}

	setNearWinsPairLow(nearWinsPairLow: string): void {
		this.nearWinsPairLow = nearWinsPairLow;
	}

	getNearWinsPairLow(): string {
		return this.nearWinsPairLow;
	}

	setDistinctWinPattern(distinctWinPattern: string): void {
		this.distinctWinPattern = distinctWinPattern;
	}

	getDistinctWinPattern(): string {
		return this.distinctWinPattern;
	}

	setNearWinsPairProbabilityPct(nearWinsPairProbabilityPct: string): void {
		this.nearWinsPairProbabilityPct = nearWinsPairProbabilityPct;
	}

	getNearWinsPairProbabilityPct(): string {
		return this.nearWinsPairProbabilityPct; 
	}

	setNearWinsPrizeProbabilityPct(nearWinsPrizeProbabilityPct: string): void {
		this.nearWinsPrizeProbabilityPct = nearWinsPrizeProbabilityPct;
	}

	getNearWinsPrizeProbabilityPct(): string {
		return this.nearWinsPrizeProbabilityPct; 
	}

	setNearWinsMultiplierProbabilityPct(nearWinsMultiplierProbabilityPct: string): void {
		this.nearWinsMultiplierProbabilityPct = nearWinsMultiplierProbabilityPct;
	}

	getNearWinMultiplierProbabilityPct(): string {
		return this.nearWinsMultiplierProbabilityPct;
	}

	setWinMechanic(winMechanic: string): void {
		this.winMechanic = winMechanic;
	}

	getWinMechanic(): string {
		return this.winMechanic;
	}

	setScratchMechanic(scratchMechanic: string): void {
		this.scratchMechanic = scratchMechanic;
	}

	getScratchMechanic(): string {
		return this.scratchMechanic;
	}

	setMatchMechanic(matchMechanic: string) {
		this.matchMechanic = matchMechanic;
	}

	getMatchMechanic(): string {
		return this.matchMechanic;
	}

	setAnticipationControl(anticipationControl: string): void {
		this.anticipationControl = anticipationControl;
	}

	getAnticipationControl(): string {
		return this.anticipationControl;
	}

	static fromJson(json: any): LotteryModel {
		let lotteryModel:LotteryModel = new LotteryModel(json.id, json.modelName, json.variantName);
    lotteryModel.setGridRow(json.gridRow);
    lotteryModel.setGridColumn(json.gridColumn);
    lotteryModel.setGridSize((lotteryModel.getGridRow() * lotteryModel.getGridColumn()));
    lotteryModel.setNumOfLines(json.numOfLines);
    lotteryModel.setNumOfPrizes(json.numOfPrizes);
    lotteryModel.setNumOfMultipliers(json.numOfMultipliers);
    lotteryModel.setRowMatches(json.rowMatches);
    lotteryModel.setColumnMatches(json.columnMatches);
    lotteryModel.setDiagonalMatches(json.diagonalMatches);
    lotteryModel.setMultipliers(json.multipliers);
    lotteryModel.setNearWinsPairHigh(json.nearWinsPairHigh);
    lotteryModel.setNearWinsPairLow(json.nearWinsPairLow);
    lotteryModel.setDistinctWinPattern(json.distinctWinPattern);
    lotteryModel.setNearWinsPairProbabilityPct(json.nearWinsPairProbabilityPct);
    lotteryModel.setNearWinsPrizeProbabilityPct(json.nearWinsPrizeProbabilityPct);
    lotteryModel.setNearWinsMultiplierProbabilityPct(json.nearWinsMultiplierProbabilityPct);
    lotteryModel.setWinMechanic(json.winMechanic);
    lotteryModel.setScratchMechanic(json.scratchMechanic);
    lotteryModel.setMatchMechanic(json.matchMechanic);
    lotteryModel.setAnticipationControl(json.anticipationControl);
		return lotteryModel;
	}
}
