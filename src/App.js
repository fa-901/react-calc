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
			{ value: 'C', label: 'C', class: '', click: '' },
			{ value: '<-', label: '<-', class: '', click: '' },
			{ value: '/', label: '/', class: '', click: '' },
			{ value: '*', label: '*', class: '', click: '' },
			{ value: '7', label: '7', class: '', click: '' },
			{ value: '8', label: '8', class: '', click: '' },
			{ value: '9', label: '9', class: '', click: '' },
			{ value: '-', label: '-', class: '', click: '' },
			{ value: '4', label: '4', class: '', click: '' },
			{ value: '5', label: '5', class: '', click: '' },
			{ value: '6', label: '6', class: '', click: '' },
			{ value: '+', label: '+', class: '', click: '' },
			{ value: '1', label: '1', class: '', click: '' },
			{ value: '2', label: '2', class: '', click: '' },
			{ value: '3', label: '3', class: '', click: '' },
			{ value: '=', label: '=', class: 'grid2xrow', click: '' },
			{ value: '0', label: '0', class: 'grid2xcol', click: '' },
			{ value: '.', label: '.', class: '', click: '' },
		];
		var btns = btnArr.map((val,i)=>{
			return(
				// <div >
				<button key={`${val}${i}`} className={`${val.class}`}>
						{val.label}
					</button>
				// </div>
			)
		});

		return (
			<div className='calc-box container p-2'>
				<textarea rows={2} className={`form-control mb-1`} value={output}/>
				<div className='calc-grid'>
					{btns}
				</div>
			</div>
		);
	}
}

export default App;
