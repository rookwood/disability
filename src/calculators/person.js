import wholePersonImpairmentTable from '../data/person';

export default function getWholePersonImpairment(binauralImpairment) {

	if (binauralImpairment == 0)
	{
		return 0;
	}

	for (let level in wholePersonImpairmentTable)
	{
		if (parseFloat(level) > binauralImpairment)
		{
			return wholePersonImpairmentTable[level];
		}
	}
}