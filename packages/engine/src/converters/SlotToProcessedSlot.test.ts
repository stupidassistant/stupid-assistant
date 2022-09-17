import { SlotToProcessedSlot } from './SlotToProcessedSlot';

describe('SlotToProcessedSlot', () => {
	it('Enum Empty', () => {
		expect(SlotToProcessedSlot({
			id: "SLOTA",
			type: "enum",
			body: {}
		})).toEqual({
			id: "SLOTA",
			type: "enum",
			body: {},
			valueRegexMap: {},
			matchRegex: ""
		});
	});

	it('Enum Full', () => {
		expect(SlotToProcessedSlot({
			id: "SLOT_B",
			type: "enum",
			body: {
				"Value1": "1",
				"Value2": ["b", "2", "two"]
			}
		})).toEqual({
			id: "SLOT_B",
			type: "enum",
			body: {
				"Value1": "1",
				"Value2": ["b", "2", "two"]
			},
			valueRegexMap: {
				"Value1": "1",
				"Value2": "b|2|two"
			},
			matchRegex: "1|b|2|two"
		});
	});

	it('Regex Empty', () => {
		expect(SlotToProcessedSlot({
			id: "SLOT_C",
			type: "regex",
			body: ""
		})).toEqual({
			id: "SLOT_C",
			type: "regex",
			body: "",
			matchRegex: ""
		});
	});

	it('Regex Full', () => {
		expect(SlotToProcessedSlot({
			id: "SLOT_C",
			type: "regex",
			body: "abc"
		})).toEqual({
			id: "SLOT_C",
			type: "regex",
			body: "abc",
			matchRegex: "abc"
		});
	});

	it('Union Empty', () => {
		expect(SlotToProcessedSlot({
			id: "SLOT_D",
			type: "union",
			body: []
		})).toEqual({
			id: "SLOT_D",
			type: "union",
			body: [],
			matchRegex: ""
		});
		expect(SlotToProcessedSlot({
			id: "SLOT_D",
			type: "union",
			body: [""]
		})).toEqual({
			id: "SLOT_D",
			type: "union",
			body: [""],
			matchRegex: ""
		});
	});

	it('Union Full', () => {
		expect(SlotToProcessedSlot({
			id: "SLOT_D",
			type: "union",
			body: ["@test/abc", "@test/def"]
		})).toEqual({
			id: "SLOT_D",
			type: "union",
			body: ["@test/abc", "@test/def"],
			matchRegex: "{@test/abc}|{@test/def}"
		});
	});

	it('Concat Empty', () => {
		expect(SlotToProcessedSlot({
			id: "SLOT_D",
			type: "concat",
			body: []
		})).toEqual({
			id: "SLOT_D",
			type: "concat",
			body: [],
			matchRegex: ""
		});
		expect(SlotToProcessedSlot({
			id: "SLOT_D",
			type: "concat",
			body: [""]
		})).toEqual({
			id: "SLOT_D",
			type: "concat",
			body: [""],
			matchRegex: ""
		});
	});

	it('Concat Full', () => {
		expect(SlotToProcessedSlot({
			id: "SLOT_D",
			type: "concat",
			body: ["@test/abc", "@test/def"]
		})).toEqual({
			id: "SLOT_D",
			type: "concat",
			body: ["@test/abc", "@test/def"],
			matchRegex: "{@test/abc}{@test/def}"
		});

		expect(SlotToProcessedSlot({
			id: "SLOT_D",
			type: "concat",
			body: ["@test/abc", " ", "@test/def"]
		})).toEqual({
			id: "SLOT_D",
			type: "concat",
			body: ["@test/abc", " ", "@test/def"],
			matchRegex: "{@test/abc} {@test/def}"
		});
	});
});