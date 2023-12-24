import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Switch } from 'antd';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  LineChartOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark'); // State to manage theme

  const handleThemeToggle = (checked) => {
    setTheme(checked ? 'dark' : 'light'); // Toggle between 'dark' and 'light' themes
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };


  const chartMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/stockDataChart">All Stocks</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/favDataChart">Favourite Stock</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div data-testid="header-component">
      {/* Menu content */}
      <Menu theme={theme} mode="horizontal">
        <Menu.Item style={{ marginRight: 'auto' }}>
          <Link to="/">
            <span>
              <strong>Stock Market Pulse</strong>
            </span>
          </Link>
        </Menu.Item>

        {isAuthenticated ? (
          <>
            <Menu.Item>
              <Link to="/">
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/marketPulse">
                <LineChartOutlined />
                Market Pulse
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/dashboard">
                <DashboardOutlined />
                My Dashboard
              </Link>
            </Menu.Item>
            <Dropdown overlay={chartMenu}>
              <Menu.Item>
                <LineChartOutlined />
                Charts
              </Menu.Item>
            </Dropdown>
            <Menu.Item>
              <Link to="/aboutus">
                <InfoCircleOutlined />
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ContactUs">
                <ContactsOutlined />
                Contact Us
              </Link>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
              <LogoutOutlined />
              Logout
            </Menu.Item>

            {/* Theme toggle button */}
            <Menu.Item style={{ marginLeft: '10px', marginTop: '5px' }}>
              <Switch
                checked={theme === 'dark'}
                onChange={handleThemeToggle}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item>
              <Link to="/">
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/register">
                <UserAddOutlined />
                Register
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/aboutus">
                <InfoCircleOutlined />
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ContactUs">
                <ContactsOutlined />
                Contact Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">
                <LoginOutlined />
                Login
              </Link>
            </Menu.Item>
            {/* Theme toggle button */}
            <Menu.Item style={{ marginLeft: '10px', marginTop: '5px' }}>
              <Switch
                checked={theme === 'dark'}
                onChange={handleThemeToggle}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Header;
