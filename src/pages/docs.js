import React, { Component } from 'react'
import './docs.css';
import { Layout, Menu, Button } from 'antd';
import { DesktopOutlined, LaptopOutlined, GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Docs extends Component {

  constructor(props) {
    super(props);
    this.gobackHome = this.gobackHome.bind(this);
  }

  render() {
    return (
      <Layout>
        <Header className="Docs-header" >
          <Link className="Docs-title" to="/">TKLogger</Link>
          <ul>
            <li><Link className="Docs-header-Link" to="/">首页</Link></li>
            <li><Link className="Docs-header-Link" to="/docs">文档</Link></li>
            <li><a target="_blank" href="https://github.com/shper" rel="noopener noreferrer"><GithubOutlined style={{ color: "#000", fontSize: 22 }} /></a></li>
          </ul>
        </Header>
        <Layout>
          <Sider width={300} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<DesktopOutlined />}>简介</Menu.Item>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="快速接入">
                <Menu.Item key="5">iOS</Menu.Item>
                <Menu.Item key="6">Android</Menu.Item>
                <Menu.Item key="6">Flutter</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: "100vh",
              }}
            >
              <div className="Docs">
                <div className="exception-wrap">
                  <div className="exception-img-block">
                    <div className="exception-img-ele" />
                  </div>
                  <div className="exception-content">
                    <h1>敬请期待</h1>
                    <div className="exception-desc">网站建设中...</div>
                    <Button type="primary" onClick={this.gobackHome}>返回首页</Button>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  gobackHome() {
    this.props.history.push('/');
  }

}

export default Docs;