import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			output: '0',
		}
	}
	render() {
		let { output } = this.state;
		return (
			<div className='calc-box container p-2'>
				<textarea rows={2} className={`form-control`}>
					{output}
				</textarea>
			</div>
		);
	}
}

export default App;
