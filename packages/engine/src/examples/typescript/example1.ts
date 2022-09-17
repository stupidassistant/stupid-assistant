import * as admin from "../../admin"; // '@stupidassistant/admin';

export const abc = admin.functions.createModule({
	id: "example_module_1",
	intents: [
		{
			id: "example_intent_1",
			phrases: ["hello"],
			lambda: (_: any, res: any) =>
				res.speak("hello world").send()
		}
	]
});
