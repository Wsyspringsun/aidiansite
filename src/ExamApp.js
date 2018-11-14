import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';
import './css/bootstrap4.1.css';
import QuestionApp from './QuestionApp'
import ExamPaperApp from './ExamPaperApp'
        
class App extends Component {
	state = {
		page: '',
		initialPage:<ExamPaperApp />
	};

	render() {
		const {page} = this.state
		let mainPage = this.state.initialPage
		switch(page){
			case 1:
				mainPage = <QuestionApp />
				break;
			case 2:
				mainPage = <ExamPaperApp /> 
				break;
		}
		return (
			<div>
			<header>
			    <div className="navbar navbar-dark bg-dark shadow-sm">
				<div className="container d-flex justify-content-between">
				    <a href="#" className="navbar-brand  align-items-center">
					<strong>ipoji系统</strong>
				    </a>
				    <ul className="nav" id="mainnav">
					<li className="nav-item">
					    <a className="nav-link text-white" href="#" onClick={()=>{this.setState({page:1})}}>题库</a>
					</li>
					<li className="nav-item">
					    <a className="nav-link text-white disabled" href="#" onClick={()=>{this.setState({page:2})}}>卷子</a>
					</li>
				    </ul>
				</div>
			    </div>
			</header>

				{mainPage}
			<footer className="text-muted">
			    <div className="container">
				<p className="float-right">
				    <a href="#">Back to top</a>
				</p>
				<p> 欢迎您!</p>
			    </div>
			</footer>
			</div>

		);
	}
}

export default App;
