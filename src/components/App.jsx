import React from 'react';
import DataEntry from './DataEntry';
import ImpairmentScore from './ImpairmentScore';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			thresholds: {
				right: { r500: 0, r1k: 0, r2k: 0, r3k: 0 },
				left:  { l500: 0, l1k: 0, l2k: 0, l3k: 0 }
			}
		}
	}

	thresholdChange(ear, label, value) {
		this.state.thresholds[ear][label] = value;
		this.setState({thresholds: this.state.thresholds});
	}

	render() {
		return (
			<div>
				<DataEntry thresholds={this.state.thresholds} thresholdChange={this.thresholdChange.bind(this)} />

				<ImpairmentScore thresholds={this.state.thresholds} />
			</div>
		);
	}
}

export default App;