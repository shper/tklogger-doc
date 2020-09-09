import React, { Component } from 'react'
import './detail.css';
import { Button } from 'antd';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.gobackHome = this.gobackHome.bind(this);
  }

  render() {
    return(
      <div className="Detail">
        <div className="exception-wrap">
          <div className="exception-img-block">
            <div className="exception-img-ele"/>
          </div>
          <div className="exception-content">
            <h1>敬请期待</h1>
            <div className="exception-desc">网站建设中...</div>
            <Button type="primary" onClick={this.gobackHome}>返回首页</Button>
          </div>
        </div>
      </div>
    ); 
  }

  gobackHome() {
    this.props.history.push('/');
  }

}

export default Detail;