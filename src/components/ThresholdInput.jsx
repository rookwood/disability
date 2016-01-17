import React from 'react';

class ThresholdInput extends React.Component {

	handleChange(event) {
		this.props.thresholdChange(this.props.ear, this.props.label, parseInt(event.target.value));
	}

	render() {
		return <input type="number" value={this.props.value} onChange={this.handleChange.bind(this)} />;
	}
}

export default ThresholdInput;