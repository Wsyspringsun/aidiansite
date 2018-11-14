import WechatImg from '../img/wechat.png';
import React, { Component } from 'react';

class App extends Component {
 
	componentDidMount() {
	const {BMap} = window
 	let map = new BMap.Map("b_map_con")
	var point = new BMap.Point(112.8494700882,35.5031028894)
	map.centerAndZoom(point, 15)
	}
	

	render() {
		var bmapStyle = {height:'800px',width:'100%'}
		return (
			<div>
				<div className="row">
					<div className="col-lg-8 col-sm-12">
						<h3>
							地理位置
						</h3>
						<div style={bmapStyle} id="b_map_con"></div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<h3>
							微信号
						</h3>
						<div>
							<img width="100%" height="auto" src={WechatImg}/>	
						</div>
						<br/>
						<br/>
						<br/>
						<h3>
							联系电话
						</h3>
						<h2>
							<em>13203561153	</em>
						</h2>
					</div>
				</div>
			</div>


		);
	}
}

export default App;



