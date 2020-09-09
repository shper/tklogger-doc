import React, { Component } from 'react'
import Background from './../back.jpg';

//定义背景样式

var sectionStyle = {
  width: "100%",
  height: "100vh",
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})` 
};

class Detail extends Component {

  render() {
    return(
      <div style={sectionStyle}>
      </div>
    ); 
  }

}
export default Detail;