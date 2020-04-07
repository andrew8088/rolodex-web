import React, { useEffect, useState } from 'react';
import './App.css';
import Statistic from 'antd/es/statistic';
import Spin from 'antd/es/spin';
import { Layout, Menu } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const { Content, Sider, Footer } = Layout;

const API = process.env.REACT_APP_API_URL;

function App(): unknown {
    const [isLoading, setIsLoading] = useState(true);
    const [uptime, setUptime] = useState(-1);

    useEffect(() => {
        fetch(`${API}/status`)
            .then((res) => res.json())
            .then((res) => {
                setIsLoading(false);
                setUptime(res.uptime);
            });
    }, []);

    return (
        <Layout hasSider={true} style={{ minHeight: '100vh' }}>
            <Sider theme="light" collapsible={true}>
                <div className="logo">Rolodex </div>
                <Menu mode="vertical">
                    <Menu.Item key="1">
                        <UserAddOutlined />
                        <span>Add Contact</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ padding: '10px 50px' }}></Content>
                <Footer>
                    {isLoading && <Spin size="large" />}
                    {!isLoading && <Statistic title="Uptime" value={uptime}></Statistic>}
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
