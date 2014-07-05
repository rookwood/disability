$(document).ready(function()
{
	var monauralRightSpan = $('#monauralRight');
	var monauralLeftSpan  = $('#monauralLeft');
	var binauralSpan      = $('#binaural');
	var wholeBodySpan     = $('#wholeBody');

	$('tbody input').on('keyup', function()
	{
		var rightEar, leftEar, binauralImpairment, wholePersonImpairment;

		var left = {
			'l500' : getValueFromField('#l500'),
			'l1k'  : getValueFromField('#l1k'),
			'l2k'  : getValueFromField('#l2k'),
			'l3k'  : getValueFromField('#l3k')
		};

		var right = {
			'r500' : getValueFromField('#r500'),
			'r1k'  : getValueFromField('#r1k'),
			'r2k'  : getValueFromField('#r2k'),
			'r3k'  : getValueFromField('#r3k')
		};

		var monauralImpairment = [];
		rightEar = getMonauralImpairment(calculateMonauralThresholdSum(right));
		leftEar  = getMonauralImpairment(calculateMonauralThresholdSum(left));

		monauralImpairment.push(rightEar);
		monauralImpairment.push(leftEar);		

		monauralImpairment.sort(function(a, b){return parseFloat(a) - parseFloat(b);});

		console.log(monauralImpairment);

		binauralImpairment = calculateBinauralImpairment(monauralImpairment[0], monauralImpairment[1]);

		console.log(binauralImpairment);

		wholePersonImpairment = getWholePersonImpairment(binauralImpairment);

		monauralRightSpan.text(rightEar);
		monauralLeftSpan.text(leftEar);
		binauralSpan.text(binauralImpairment);
		wholeBodySpan.text(wholePersonImpairment);

	});
});

var monauralImpairmentTable = { "100" : "0", "105" : "1.9", "110" : "3.8", "115" : "5.6", "120" : "7.5", "125" : "9.4", "130" : "11.2", "135" : "13.1", "140" : "15.0", "145" : "16.9", "150" : "18.8", "155" : "20.6", "160" : "22.5", "165" : "24.4", "170" : "26.2", "175" : "28.1", "180" : "30.0", "185" : "31.9", "190" : "33.8", "195" : "35.6", "200" : "37.5", "205" : "39.4", "210" : "41.2", "215" : "43.1", "220" : "45.0", "225" : "46.9", "230" : "48.8", "235" : "50.6", "240" : "52.5", "245" : "54.4", "250" : "56.2", "255" : "58.1", "260" : "60.0", "265" : "61.9", "270" : "63.8", "275" : "65.6", "280" : "67.5", "285" : "69.3", "290" : "71.2", "295" : "73.1", "300" : "75.0", "305" : "76.9", "310" : "78.8", "315" : "80.6", "320" : "82.5", "325" : "84.4", "330" : "86.2", "335" : "88.1", "340" : "90.0", "345" : "91.9", "350" : "93.8", "355" : "95.6", "360" : "97.5", "365" : "99.4", "370" : "100.0"};

var wholePersonImpairmentTable = {"0" : 0, "1.4"  : 0, "4.2"  : 1, "7.1"  : 2, "9.9"  : 3, "12.8" : 4, "15.7" : 5, "18.5" : 6, "21.4" : 7, "27.1" : 8, "29.9" : 9, "32.8" : 10, "35.7" : 11, "38.5" : 13, "41.4" : 14, "44.2" : 15, "47.1" : 16, "49.9" : 17, "52.8" : 18, "55.7" : 19, "58.5" : 20, "61.4" : 21, "64.2" : 22, "67.1" : 23, "69.9" : 24, "72.8" : 25, "75.7" : 26, "78.5" : 27, "81.4" : 28, "84.2" : 29, "87.1" : 30, "89.9" : 31, "92.8" : 32, "95.7" : 33, "98.5" : 34, "100.0"  : 35};

function getValueFromField(id)
{
	var value = parseInt($(id).val());

	// AMA guidelines do not recognize values greater than 100 or under 0
	if (value < 0)
	{
		value = 0;
	}

	if (value > 100)
	{
		value = 100;
	}

	return value || 0;
}


function calculateBinauralImpairment(betterEar, poorerEar)
{ 
	var out = (5 * parseFloat(betterEar) + parseFloat(poorerEar)) / 6;

	return out.toFixed(1);;
}


function calculateMonauralThresholdSum(ear)
{
	var output = 0;

	$.each(ear, function(index, value)
	{
		output += value;
	});

	// Anything over 370 is 100%
	if (output > 370)
	{
		output = 370;
	}

	return output;
};


function getMonauralImpairment(sum)
{
	return monauralImpairmentTable[sum] || 0;
}

function getWholePersonImpairment(binauralImpairment)
{
	if (parseInt(binauralImpairment) == "0.0")
	{
		return 0;
	}

	for (property in wholePersonImpairmentTable)
	{
		if (wholePersonImpairmentTable.hasOwnProperty(property))
		{
			if (parseFloat(binauralImpairment) > parseFloat(property))
			{
				continue;
			}
			else
			{
				return wholePersonImpairmentTable[property];
			}
		}
	}
}