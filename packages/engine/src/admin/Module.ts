import { Module, ProcessedModule, ProcessedIntent } from "../types/Module";
import { PhraseToProcessedPhrase } from "../converters/PhraseToProcessedPhrase";

export const createModule = (m: Module): ProcessedModule => {
	const intents = m.intents.map((v): ProcessedIntent => {
		const phrases = v.phrases.map(p => PhraseToProcessedPhrase(p));
		return {
			id: v.id,
			lambda: v.lambda,
			phrases: phrases,
			slotIds: [...new Set(phrases.reduce((l: string[], p) =>
				[...l, ...Object.values(p.slots.aliases), ...p.slots.slots],
				[]))],
		};
	});

	return {
		id: m.id,
		type: "module",
		intents: intents,
		slotIds: [...new Set(intents.reduce((l: string[], p) =>
			[...l, ...p.slotIds],
			[]))],
	};
};
