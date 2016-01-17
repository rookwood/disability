import { expect } from 'chai';
import getWholePersonImpairment from '../src/calculators/person';

describe('whole person calculator', () => {
	it('calculates whole person impairment', () => {
		let impairment = getWholePersonImpairment(20);

		expect(impairment).to.equal(7);
	});
});