import React from 'react';
import { Component } from 'react';
import ThresholdInput from './ThresholdInput';

class DataEntry extends Component {

	buildInputs(ear) {
		return Object.keys(this.props.thresholds[ear]).map((key) => {
			return (
				<td key={key}>
					<ThresholdInput label={key} ear={ear} value={this.props.thresholds[ear][key]} thresholdChange={this.props.thresholdChange} />
				</td>
			);
		});
	}

	render() {
		let rightEarInputs = this.buildInputs('right');
		let leftEarInputs  = this.buildInputs('left');

		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th></th>
						<th>500 Hz</th>
						<th>1 kHz</th>
						<th>2 kHz</th>
						<th>3 kHz</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Right Thresholds</td>
						{rightEarInputs}
					</tr>
					<tr>
						<td>Left Thresholds</td>
						{leftEarInputs}
					</tr>
				</tbody>
			</table>
		);
	}
}

export default DataEntry;