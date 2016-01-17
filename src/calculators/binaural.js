export default function getBinauralImpairment(thresholds) {
	let lower = Math.min.apply(null, thresholds);
	let upper = Math.max.apply(null, thresholds);

	let impairment = (5 * parseFloat(lower) + parseFloat(upper)) / 6;

	return parseFloat(impairment.toFixed(1));
}