import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';


const { Title, Text } = Typography;

const AboutUs = () => {
  return (
    <div>
      
      <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}>About Us Page</Title>
        <Text style={{ color: 'white', textAlign: 'center', display: 'block' }}>
          Some text about who we are and what we do. Resize the browser window to see that this page is responsive by the way.
        </Text>
      </div>

      <Title level={2} style={{ textAlign: 'center', marginTop: '20px' }}>Our Team</Title>

      <Row gutter={[16, 16]} justify="center">
        <Col span={6}>
          <Card>
            <img
              src="/images/jane.jpg" // Update with your image path
              alt="Jane"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Jane Doe</Title>
              <Text strong>CEO & Founder</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>jane@example.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
          <img
              src="/images/mike.jpg" 
              alt="mike"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Mike Ross</Title>
              <Text strong>Art Director</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>mike@example.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
          <img
              src="/images/john.jpg" // Update with your image path
              alt="John"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>John Doe</Title>
              <Text strong>Designer</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>john@example.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;

