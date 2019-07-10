import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Modal
  } from 'antd';
  import * as React from 'react';
  import { FormComponentProps } from 'antd/lib/form';
  import { WrappedFormUtils } from 'antd/es/form/Form';
import './index.css';
  interface UserFormProps extends FormComponentProps {
    age: number;
    name: string;
  }
 class RegistrationForm extends React.Component<UserFormProps, any>{
    constructor(props: UserFormProps) {
        super(props);
      }
      state = { visible: false };
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleSubmit() {
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
      render() {
        const { getFieldDecorator } = this.props.form;
          return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
                </Modal>
            </div>
          );
      }
  }
  
  export function createMainForm(): React.ComponentClass<any> {
    const form: any = RegistrationForm
    return Form.create<any>()(form)
  }
