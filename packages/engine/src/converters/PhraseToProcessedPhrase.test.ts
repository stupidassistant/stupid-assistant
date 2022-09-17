import { PhraseToProcessedPhrase } from './PhraseToProcessedPhrase';

describe('PhraseToProcessedPhrase', () => {
	it('Empty', () => {
		expect(PhraseToProcessedPhrase("")).toEqual({
			utterance: "",
			baseUtterance: "",
			slots: {
				slots: [],
				aliases: {}
			}
		});
	});

	it('Plain Text', () => {
		expect(PhraseToProcessedPhrase("abc")).toEqual({
			utterance: "abc",
			baseUtterance: "abc",
			slots: {
				slots: [],
				aliases: {}
			}
		});
	});

	it('Slot Id', () => {
		expect(PhraseToProcessedPhrase("{abc}")).toEqual({
			utterance: "{abc}",
			baseUtterance: "{abc}",
			slots: {
				slots: ["abc"],
				aliases: {}
			}
		});
		
		expect(PhraseToProcessedPhrase("abc {abc}")).toEqual({
			utterance: "abc {abc}",
			baseUtterance: "abc {abc}",
			slots: {
				slots: ["abc"],
				aliases: {}
			}
		});
	});

	it('Slot Id Alias', () => {
		expect(PhraseToProcessedPhrase("{abc:cba}")).toEqual({
			utterance: "{abc:cba}",
			baseUtterance: "{cba}",
			slots: {
				slots: [],
				aliases: {
					abc: "cba"
				}
			}
		});
		
		expect(PhraseToProcessedPhrase("abc {abc:cba}")).toEqual({
			utterance: "abc {abc:cba}",
			baseUtterance: "abc {cba}",
			slots: {
				slots: [],
				aliases: {
					abc: "cba"
				}
			}
		});
	});
});