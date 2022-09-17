const engine = require("../../admin"); // '@stupidassistant/admin';

module.exports = {
	abc: engine.functions.createModule({
		id: "example_module_2",
		intents: [
			{
				id: "whatIsTheTime",
				phrases: ["what is the time"],
				lambda: (_, res) => {
					const d = new Date();
					return res.speak(`${d.getHours()}:${d.getMinutes()}`).send();
				}
			}
		]
	})
};