const engine = require("../../admin"); // '@stupidassistant/admin';

module.exports = {
	abc: engine.functions.createModule({
		id: "example_module_1",
		intents: [
			{
				id: "example_intent_1",
				phrases: ["hello"],
				lambda: (_, res) =>
					res.speak("hello world").send()
			}
		]
	})
};