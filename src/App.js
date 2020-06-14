import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			output: '0',
			calcStr: '',
		}

		var self = this;
		[
			'addToStr',
			'clearValue',
			'delete',
			'calculatevalue',
			'keyEvt',
		].map((v) => {
			self[v] = self[v].bind(self);
		});
	}

	componentDidMount() {
		document.addEventListener("keydown", this.keyEvt, false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.keyEvt, false);
	}

	keyEvt(e) {
		const val = e.key;
		if (/[-+*.\/]|[0-9]/.test(val)) {
			this.addToStr(val);
		}
		if (val === 'Enter') {
			this.calculatevalue();
		}
		if (val === 'Backspace') {
			this.delete();
		}
	}

	addToStr(val) {
		var { calcStr } = this.state;
		var lastChr = calcStr[calcStr.length - 1];
		if (calcStr.length < 1) {
			if (/[*\/]/.test(val)) {
				return;
			}
		}
		if (/[-+*.\/]/.test(val) && /[-+*.\/]/.test(lastChr)) {
			calcStr = calcStr.slice(0, -1);
		}
		this.setState({ calcStr: calcStr + val });
	}

	delete() {
		var { calcStr } = this.state;
		this.setState({ calcStr: calcStr.slice(0, -1) });
	}

	clearValue() {
		this.setState({ output: '0', calcStr: '' });
	}

	calculatevalue() {
		var { calcStr } = this.state;
		var lastChr = calcStr[calcStr.length - 1];
		if (/[-+*.\/]/.test(lastChr)) {
			return;
		}
		this.setState({ output: eval(calcStr) });
	}

	render() {
		let { output, calcStr } = this.state;

		var btnArr = [
			{ value: 'C', label: 'C', class: '', click: this.clearValue },
			{ value: '←', label: '←', class: '', click: this.delete },
			{ value: '/', label: '/', class: '', click: this.addToStr },
			{ value: '*', label: '*', class: '', click: this.addToStr },
			{ value: '7', label: '7', class: '', click: this.addToStr },
			{ value: '8', label: '8', class: '', click: this.addToStr },
			{ value: '9', label: '9', class: '', click: this.addToStr },
			{ value: '-', label: '-', class: '', click: this.addToStr },
			{ value: '4', label: '4', class: '', click: this.addToStr },
			{ value: '5', label: '5', class: '', click: this.addToStr },
			{ value: '6', label: '6', class: '', click: this.addToStr },
			{ value: '+', label: '+', class: '', click: this.addToStr },
			{ value: '1', label: '1', class: '', click: this.addToStr },
			{ value: '2', label: '2', class: '', click: this.addToStr },
			{ value: '3', label: '3', class: '', click: this.addToStr },
			{ value: '=', label: '=', class: 'grid2xrow', click: this.calculatevalue },
			{ value: '0', label: '0', class: 'grid2xcol', click: this.addToStr },
			{ value: '.', label: '.', class: '', click: this.addToStr },
		];
		var btns = btnArr.map((val, i) => {
			return (
				<button key={`${val}${i}`} className={`${val.class} inputBtn`} onClick={() => { val.click(val.value) }}>
					{val.label}
				</button>
			)
		});

		return (
			<div className='calc-box container p-2'>
				<div className='outputBox mb-1'>
					<div className='formula'>
						{calcStr}
					</div>
					<div className='result'>
						{output}
					</div>
				</div>
				<div className='calc-grid'>
					{btns}
				</div>
			</div>
		);
	}
}

export default App;
