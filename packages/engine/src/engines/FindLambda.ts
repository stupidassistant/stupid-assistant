import type { ProcessedModule } from '../types/Module';
import { PhraseMatcher } from './PhraseMatcher';

export const FindLambda = (str: string, modules: ProcessedModule[]): {
	moduleId: string,
	intentId: string,
	phrase: string
} | null => {
	for (let m of modules) {
		for (let intent of m.intents) {
			const result = PhraseMatcher(str, intent.phrases);

			if (result.match)
				return {
					moduleId: m.id,
					intentId: intent.id,
					phrase: result.matchedPhrase
				};
		}
	}

	return null;
};
