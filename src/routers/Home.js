import LanguageOrderImg from '../img/language_order.png';
import ClsRoom1 from '../img/classroom1.jpg';
import ClsRoom2 from '../img/classroom2.jpg';
import ClsRoom3 from '../img/classroom3.jpg';
import React, { Component } from 'react';

const ORG_NAME = '爱点课堂';

class Home extends Component {
	render() {
		const title = '开设职业级Java编程课程，让您掌握基于Java语言的互联网产品开发能力，具备面向未来的计算机思维';
		return (
			<div>
					<div className="jumbotron">
						<h1 className="display-6">
						掌握编程技能，漫游IT世界，共创智能时代！
						</h1>
						<p>如果您对编程有兴趣，请加入我们的{ORG_NAME}</p>
						<a className="btn btn-primary btn-lg" href="/about" role="button">联系我们</a>
					</div>

					<div role="main">
							<div className="section">
								<h3 className="display-6">主题</h3>
								<div>
								&nbsp;&nbsp;&nbsp;&nbsp;{title}
								</div>
							</div>
							<div className="section">
								<h3 className="display-6">环境</h3>
								<div className="row">
									<div className="pic-con col-md-4 col-sm-11">
									<img width="100%" height="100%" src={ClsRoom1}/>
									</div>
									<div className="pic-con col-md-4 col-sm-11">
									<img width="100%" height="100%" src={ClsRoom2}/>
									</div>
									<div className="pic-con col-md-4 col-sm-11">
									<img width="100%" height="100%" src={ClsRoom3}/>
									</div>
								</div>
							</div>
							<div className="section">
								<h3 className="display-6">Java语言</h3>
								<div>
									&nbsp;&nbsp;&nbsp;&nbsp;Java语言是运行于java虚拟机（JVM）上的编程语言，是功能最强大，使用范围最广泛，最简单易懂的语言之一。可以用于安卓手机应用开发，Web服务器程序开发，各种平台的桌面软件开发
								</div>
								<div>
									Java语言流行排行
								</div>
								<img width="86%" height="auto" src={LanguageOrderImg}/>
							</div>
					</div>
			</div>
		);
	}
}

export default Home;
