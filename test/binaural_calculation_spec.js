import { expect } from 'chai';
import getBinauralImpairment from '../src/calculators/binaural';

describe('binaural calculator', () => {
	it('calculates binaural impairment', () => {
		let impairment1 = getBinauralImpairment([50.6, 39.4]);
		let impairment2 = getBinauralImpairment([45, 37.5]);

		expect(impairment1).to.equal(41.3);
		expect(impairment2).to.equal(38.8);
	})

	it('returns no impairment when appropriate', () => {
		let impairment = getBinauralImpairment([0, 0]);

		expect(impairment).to.equal(0);
	});
})