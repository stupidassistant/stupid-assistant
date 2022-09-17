import { ExtractSlotsFromPhrase } from './ExtractSlotsFromPhrase';

describe('ExtractSlotsFromPhrase', () => {
	it('Empty', () => {
		expect(ExtractSlotsFromPhrase("")).toEqual({
			slots: [],
			aliases: {}
		});
		expect(ExtractSlotsFromPhrase("abc")).toEqual({
			slots: [],
			aliases: {}
		});
	});
	
	it('Valid', () => {
		expect(ExtractSlotsFromPhrase("abc {alias:OB1}")).toEqual({
			slots: [],
			aliases: {
				alias: "OB1"
			}
		});
		expect(ExtractSlotsFromPhrase("{alias2:OB4}")).toEqual({
			slots: [],
			aliases: {
				alias2: "OB4"
			}
		});
		
		expect(ExtractSlotsFromPhrase("abc {OB1}")).toEqual({
			slots: ["OB1"],
			aliases: {}
		});
		expect(ExtractSlotsFromPhrase("{OB4}")).toEqual({
			slots: ["OB4"],
			aliases: {}
		});
	});
});