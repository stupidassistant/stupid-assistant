import { LambdaExtractor } from './LambdaExtractor';

import { StringExamples } from '../examples/StringExamples';
import { ObjectExamples } from '../examples/ObjectExamples';

describe('LambdaExtractor', () => {
	it('Valid', () => {
		expect(JSON.stringify(LambdaExtractor(
			Object.values(StringExamples.JS)[0]
		))).toEqual(JSON.stringify(
			Object.values(ObjectExamples.JS)[0]
		));
	});
});
