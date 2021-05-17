import React,{useState, Component} from 'react';
import {Link} from 'react-scroll';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import image1 from "../assets/Consol.jpg"
import { Layout, Menu } from 'antd';
import {
 
  HomeOutlined,
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
  SlackSquareOutlined,
  LayoutOutlined,
  FileOutlined,
  UserOutlined,
  BarsOutlined 
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
const MainLayout=({children}) =>{
 const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };
  
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width="40vh" style={{minHeight: "200vh", position:"fixed"}}>

          <img src ={image1} alt="logo" className="logo" />
          <h1 className=" headerName">  Consolatrice BYIRINGIRO </h1>
          <div className="socialMediaAllIcon">
            <menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
              <GithubOutlined className="socialMediaIcon"/>
            <LinkedinFilled className="socialMediaIcon"/>
            <TwitterOutlined className="socialMediaIcon" />
            <SlackSquareOutlined className="socialMediaIcon" />
            </menu>
            </div>

        <div >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined className="inlineIcon"/>}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined className="inlineIcon"/>}>
              <Link  to="about" spy={true} smooth={true}>About</Link>
             
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined className="inlineIcon"/>}>
             Resume
            </Menu.Item>
            <Menu.Item key="4" icon={<LayoutOutlined className="inlineIcon"/>}>
             Portfolio
            </Menu.Item>
            <Menu.Item key="5" icon={<BarsOutlined className="inlineIcon"/>}>
             service
            </Menu.Item>
          </Menu>
          </div>

          <div className="sideFooter">
          <p className="copyright"> © Copyright <span > SheCanCode </span> </p>
         <p className= "designer"> Designed by <span> Consolatrice </span></p>
         </div>
        </Sider>
        
       <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header> */}
          <Content
            className="site-layout-background"
            style={{
              margin: '0px 0px',
              padding: 0,
              minHeight: "100vh",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
}
export default MainLayout;