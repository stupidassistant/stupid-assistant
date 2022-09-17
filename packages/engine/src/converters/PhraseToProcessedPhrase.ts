import { ProcessedPhrase, Phrase } from "../types/Phrases";
import { ExtractSlotsFromPhrase } from '../extractors/ExtractSlotsFromPhrase';
import { ValidatePhrase } from "../validators/ValidatePhrase";

export const PhraseToProcessedPhrase = (phrase: Readonly<Phrase>): ProcessedPhrase => {
	if (typeof phrase == "string") {
		if (!ValidatePhrase(phrase))
			throw "Invalid Phrase";

		return {
			utterance: phrase,
			baseUtterance: phrase.replace(/({[a-z0-9]+:)/g, "{"),
			slots: ExtractSlotsFromPhrase(phrase)
		};
	}

	return phrase;
}