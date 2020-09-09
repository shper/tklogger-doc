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
            <Paragraph>TKLogger 是一款高可用的日志库，分别有Android、iOS、Flutter 版本</Paragraph>
          </Typography>
          <br />
          <Space size={15}>
          <Button type="primary" onClick={this.gotoDetailPage}>开始使用</Button>
          <Button icon={<GithubOutlined />} onClick={this.openGithub}>Github</Button>
        </Space>
        </div>
      </div>
      );
  }

  gotoDetailPage() {
    this.props.history.push('/detail');
  }

  openGithub() {
    var win = window.open("https://github.com/shper", '_blank');
    win.focus();  
  }

}

export default Home;
