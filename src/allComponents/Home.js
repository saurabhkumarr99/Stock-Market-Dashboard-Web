import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, List } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      <Typography>
        <Title>Welcome to the Stock Market Dashboard!</Title>
        <Paragraph>
          The Stock Market Dashboard is an interactive platform designed to provide users with real-time
          stock market data and powerful analysis tools.
        </Paragraph>
        <Title level={2}>Key Features:</Title>
        <List
          bordered
          dataSource={[
            'View different stock categories and sectors',
            'Create your personalized dashboard',
            'Real-time data visualization with interactive charts',
            'Customizable settings for a tailored experience',
          ]}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Title level={2}>Explore Now:</Title>
        <Paragraph>Get started by exploring our features:</Paragraph>
        <List>
          <List.Item>
            <Link to="/categories">View Stock Categories</Link>
          </List.Item>
          <List.Item>
            <Link to="/dashboard">Create Personalized Dashboard</Link>
          </List.Item>
          {/* Add more links to other features/routes */}
        </List>
      </Typography>
    </div>
  );
};

export default Home;
