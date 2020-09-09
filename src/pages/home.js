import React, { Component } from 'react';
import './home.css';
import { Typography, Button, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

class Home extends Component {

  constructor(props) {
    super(props);
    this.gotoDetailPage = this.gotoDetailPage.bind(this);
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-details">
          <Typography>
            <Title>TKLogger</Title>
            <Paragraph className="Home-desc">
              TKLogger 是个多端一致的日志库，分别支持 Android、iOS、Flutter 平台，
              默认实现 日志控制台输出、文件存储，也可以自定义日志上传云端、日志拦截器等。
            </Paragraph>
          </Typography>
          <br />
          <Space size={15}>
            <Button type="primary" onClick={this.gotoDetailPage}>开始使用</Button>
            <Button icon={<GithubOutlined />} onClick={() => this.openGithub("iOS")}>iOS</Button>
            <Button icon={<GithubOutlined />} onClick={() => this.openGithub("Android")}>Android</Button>
            <Button icon={<GithubOutlined />} onClick={() => this.openGithub("Flutter")}>Flutter</Button>
          </Space>
        </div>
      </div>
    );
  }

  gotoDetailPage() {
    this.props.history.push('/docs');
  }

  openGithub(tag) {
    var url = "https://github.com/shper/";
    switch (tag) {
      case "iOS":
        url += "/TKLogger-iOS";
        break;
      case "Android":
        url += "/TKLogger-Android";
        break;
      case "Flutter":
        url += "/TKLogger-Flutter";
        break;
      default:
        url += "";
    }

    var win = window.open(url, '_blank');
    win.focus();
  }

}

export default Home;
