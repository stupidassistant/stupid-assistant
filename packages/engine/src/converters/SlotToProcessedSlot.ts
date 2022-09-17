import { Slot, ProcessedSlot, EnumSlot } from "../types/Slot";

export const SlotToProcessedSlot = (slot: Readonly<Slot>): ProcessedSlot => {
	switch (slot.type) {
		case "enum":
			const values = (Object.entries((slot as EnumSlot).body)).reduce((o: Record<string, string>, [k, v]) => {
				o[k] = typeof v == "string" ? v : v.join('|');
				return o;
			}, {});

			return {
				id: slot.id,
				type: slot.type,
				body: slot.body,
				valueRegexMap: values,
				matchRegex: Object.values(values).join('|')
			};

		case "regex":
			return {
				id: slot.id,
				type: slot.type,
				body: slot.body,
				matchRegex: slot.body
			};

		case "union":
			return {
				id: slot.id,
				type: slot.type,
				body: slot.body,
				matchRegex: slot.body.map(v => v.match(/@([a-zA-Z0-9])+\/([a-zA-Z0-9])+/) ? `{${v}}` : v).join('|')
			};

		case "concat":
			return {
				id: slot.id,
				type: slot.type,
				body: slot.body,
				matchRegex: slot.body.map(v => v.match(/@([a-zA-Z0-9])+\/([a-zA-Z0-9])+/) ? `{${v}}` : v).join('')
			};

		case "function":
			return {
				id: slot.id,
				type: slot.type,
				handler: slot.handler
			};

		default:
			throw "Invalid Slot Type";
	}
}