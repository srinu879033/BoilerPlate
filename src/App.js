import "./App.css";
import 'antd/dist/antd.min.css';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Input, Space, Tooltip } from 'antd';
import { EyeInvisibleOutlined,EyeTwoTone } from '@ant-design/icons';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='form'>
          <h1>Login Form</h1>
          <Space direction="vertical">
          <Input
          className="input"
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />      
    <Input placeholder="Email"/>
    <Input.Password
      placeholder="input password"
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    /> 
    <Button type="primary">Submit</Button>
    </Space>   
        </div>
      </div>
    </div>
  );
}

export default App;