import { Lambda } from "./Lambda";
import { Phrase, ProcessedPhrase } from "./Phrases";

export type Module = {
	id: string,
	intents: {
		id: string,
		phrases: Phrase[],
		lambda: Lambda
	}[]
};

export type ProcessedIntent = {
	id: string,
	phrases: ProcessedPhrase[],
	slotIds: string[],
	lambda: Lambda
}

export type ProcessedModule = {
	id: string,
	type: "module",
	intents: ProcessedIntent[],
	slotIds: string[]
};