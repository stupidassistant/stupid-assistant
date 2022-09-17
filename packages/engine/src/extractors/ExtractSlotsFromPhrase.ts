import { PhraseSlots, Phrase } from "../types/Phrases";

export const ExtractSlotsFromPhrase = (phrase: string): PhraseSlots => {
	const phraseSegments = phrase.split(/[{}]/g);

	if (phraseSegments.length % 2 == 0)
		throw "Invalid Phrase";

	return phraseSegments
		.filter((_, i) =>
			i % 2 == 1
		).reduce((o: PhraseSlots, v) => {
			if (v.indexOf(':') != -1) {
				const l = v.split(/[:]/g);
				o.aliases[l[0]] = l[1];
			} else {
				o.slots.push(v);
			}

			return o;
		}, {
			slots: [],
			aliases: {}
		});
}