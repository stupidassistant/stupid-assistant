import { ProcessedPhrase } from '../types/Phrases';
import { ObjectExamples } from '../examples/ObjectExamples';

const { JS, TS } = ObjectExamples;

export const PhraseMatcher = (str: string, phrases: ProcessedPhrase[]): {
	match: false
} | {
	match: true,
	matchedPhrase: string
} => {
	for (let p of phrases) {
		// if (p.regex.text(str)) {
		// return { match: true, phrase: str };
		// }
	}

	return { match: false };
};
