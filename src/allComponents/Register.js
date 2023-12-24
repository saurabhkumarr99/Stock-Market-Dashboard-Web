import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Image } from 'antd';


const { Title } = Typography;

const Register = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // Add logic here to handle form submission
  };

  return (
    <div>
      <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}>Register yourself</Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ width: '30%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Image
              src="/images/ancientHistory.jpeg"
              alt="Registration Image"
              style={{ width: '100%', height: 'auto', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
            />
          </div>
          {/* <Title level={2} style={{ textAlign: 'center' }}>Register</Title> */}
          <Form
            form={form}
            onFinish={handleSubmit}
            initialValues={{
              agreement: false,
            }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input a valid email address!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject('Please accept the agreement'),
                },
              ]}
            >
              <Checkbox>
                I have read the <a href="/terms">agreement</a>
              </Checkbox>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div></div>
  );
};

export default Register;
