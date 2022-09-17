export type Lambda = (req: LambdaRequest, res: LambdaResponce) => LambdaResult;

export type LambdaResult = {
	serverTimestamp: Date,
	localeTimestamp: Date,
	text: string
}

export type LambdaRequest = {
	moduleId: string,
	intentId: string,
	params: {
		[alias: string]: {
			typeId: string,
			value: string
		}
	}
};

export type LambdaResponce = {
	speak: (str: string) => LambdaResponce,

	send: () => LambdaResult
}