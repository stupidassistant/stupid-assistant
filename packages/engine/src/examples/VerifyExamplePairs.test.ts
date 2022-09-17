import { ObjectExamples } from './ObjectExamples';

const { JS, TS } = ObjectExamples;

describe('VerifyExamplePairs', () => {
	it('Are Equal', () => {
		const filesnames = new Set([...Object.keys(JS), ...Object.keys(TS)]);

		filesnames.forEach(filename => {
			const JSFile = JS[filename];
			const TSFile = TS[filename];

			expect(Object.keys(JSFile)).toEqual(Object.keys(TSFile));

			const modulesNames = new Set([...Object.keys(JSFile), ...Object.keys(TSFile)]);

			modulesNames.forEach(moduleName => {
				const JSModule = JSFile[moduleName];
				const TSModule = TSFile[moduleName];

				expect(JSModule.id).toEqual(TSModule.id);
				expect(JSModule.intents.length).toEqual(TSModule.intents.length);

				for (let iId = 0; iId < TSModule.intents.length; iId++) {
					const JSintent = JSModule.intents[iId];
					const TSintent = TSModule.intents[iId];

					expect(JSintent.id).toEqual(TSintent.id);
					expect(JSintent.phrases).toEqual(TSintent.phrases);
				}
			});
		});
	});
});
