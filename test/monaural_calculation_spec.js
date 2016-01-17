import { expect } from 'chai';
import getMonauralImpairment from '../src/calculators/monaural';

describe('monaural calculator', () => {
	it('calculates monaural impairment', () => {
		let impairment = getMonauralImpairment([25, 35, 40, 50]);

		expect(impairment).to.equal(18.8);
	});

	it('returns no impairment for threshold totals under 100', () => {
		let impairment = getMonauralImpairment([10, 10, 15, 20]);

		expect(impairment).to.equal(0);
	});

	it('returns 100 for all threshold sums of 370 or greater', () => {
		let impairment = getMonauralImpairment([100, 100, 100, 100]);

		expect(impairment).to.equal(100);
	});

	it('rounds out sums that are not multiples of 5', () => {
		let impairment = getMonauralImpairment([25, 35, 39, 50]);

		expect(impairment).to.equal(18.8);
	});
});