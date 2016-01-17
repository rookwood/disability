import monauralImpairmentTable from '../data/monaural';
import { round5 } from '../helpers';

export default function getMonauralImpairment(thresholds) {
	let sum = thresholds.reduce(function(a, b) {
		return a + b;
	});

	if (sum <= 100)
	{
		return 0;
	}

	sum = round5(sum);

	return parseFloat(monauralImpairmentTable[Math.min(sum, 370)]);
}
