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

		var btnArr = [
			{ label: 'C', value: '', class: '', click: '' },
			{ label: '<-', value: '', class: '', click: '' },
			{ label: '/', value: '', class: '', click: '' },
			{ label: '7', value: '', class: '', click: '' },
			{ label: '8', value: '', class: '', click: '' },
			{ label: '9', value: '', class: '', click: '' },
			{ label: '*', value: '', class: '', click: '' },
			{ label: '4', value: '', class: '', click: '' },
			{ label: '5', value: '', class: '', click: '' },
			{ label: '6', value: '', class: '', click: '' },
			{ label: '-', value: '', class: '', click: '' },
			{ label: '1', value: '', class: '', click: '' },
			{ label: '2', value: '', class: '', click: '' },
			{ label: '3', value: '', class: '', click: '' },
			{ label: '+', value: '', class: '', click: '' },
			{ label: '=', value: '', class: '', click: '' },
		];
		var btns = btnArr.map((val,i)=>{
			return(
				<div key={`${val}${i}`}>
					{val.label}
				</div>
			)
		});

		return (
			<div className='calc-box container p-2'>
				<textarea rows={2} className={`form-control mb-1`} value={output}/>
				{btns}
				<div className='row'>
					<div className='col-sm-3'>
						<button className='btn btn-primary'>3</button>
					</div>
					<div className='col-sm-3'>
						<button className='btn btn-primary fas fa-hiking'></button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
