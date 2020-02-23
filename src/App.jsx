import React, { Component } from 'react';
import uuid from 'react-uuid';
import InputRange from './components/InputRange/InputRange.jsx';

import AddButton from './components/AddButton/AddButton.jsx';

class App extends Component {
	state = {
		inputRanges: [{ id: '', value: 0 }],
		valueLeft: 0
	};

	addInputRangeHandler = (id, defaultValue = 0) => {
		const { inputRanges } = this.state;
		console.log(inputRanges);
		inputRanges.push({ id: id, value: defaultValue });
		this.setState({ inputRanges: inputRanges });
	};

	handlerChangeValue = (event, id) => {
		const prevStateValueLeft = this.state.valueLeft;

		// declare inputRanges
		const inputRanges = [...this.state.inputRanges];
		// find index
		const inputRangeIndex = inputRanges.findIndex((inputRange) => {
			return inputRange.id === id;
		});
		// declase particular inputRange
		const inputRange = { ...this.state.inputRanges[inputRangeIndex] };

		// write
		inputRange.value = Number(event.target.value);
		// write
		inputRanges[inputRangeIndex] = inputRange;

		let sumValues = 0;
		for (let i = 0; i < inputRanges.length; i++) {
			sumValues += inputRanges[i].value;
		}

		let valueLeft = 100 - sumValues;

		if (!(valueLeft < prevStateValueLeft && valueLeft < 0)) {
			this.setState((prevState) => {
				return { inputRanges: inputRanges, valueLeft: valueLeft };
			});
		}
	};

	render() {
		let persons = (
			<>
				{this.state.inputRanges.map((inputRange, index) => {
					return (
						<InputRange
							key={index}
							value={inputRange.value}
							valueLeft={this.state.valueLeft}
							handlerChangeValue={(event) =>
								this.handlerChangeValue(event, inputRange.id)
							}
						/>
					);
				})}
			</>
		);

		return (
			<div>
				{persons}
				<AddButton
					addInputRangeHandlerClick={() => this.addInputRangeHandler(uuid())}
				/>
			</div>
		);
	}
}

export default App;
