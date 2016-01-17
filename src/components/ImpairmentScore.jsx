import React from 'react';

import getBinauralImpairment from '../calculators/binaural';
import getMonauralImpairment from '../calculators/monaural';
import getWholePersonImpairment from '../calculators/person';

class ImpairmentScore extends React.Component {

	render() {

		let rightThresholds = Object.keys(this.props.thresholds.right).map((key) => {
			return this.props.thresholds.right[key];
		});

		let leftThresholds = Object.keys(this.props.thresholds.left).map((key) => {
			return this.props.thresholds.left[key];
		});

		let rightImpairment    = getMonauralImpairment(rightThresholds);
		let leftImpairment     = getMonauralImpairment(leftThresholds);
		let binauralImpairment = getBinauralImpairment([rightImpairment, leftImpairment]);
		let personImpairment   = getWholePersonImpairment(binauralImpairment);

		return (
			<div className="row">
				<div className="col-md-12">
					<h4>Disability percentages</h4>
					<ul className="list-unstyled">
						<li><span className="rating-label">Monaural right</span><span id="monauralRight">{rightImpairment}</span>%</li>
						<li><span className="rating-label">Monaural left</span><span id="monauralLeft">{leftImpairment}</span>%</li>
						<li><span className="rating-label">Binaural</span><span id="binaural">{binauralImpairment}</span>%</li>
						<li><span className="rating-label">Whole person</span><span id="wholeBody">{personImpairment}</span>%</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ImpairmentScore;