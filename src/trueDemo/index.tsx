import {
    Form,
    Input,
    Tooltip,
    Icon,
    Collapse,
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
import data from '../jsonDemo/data';
import {createMainForm} from './mainForm';
  interface UserFormProps extends FormComponentProps {
    age: number;
    name: string;
    data: object
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
    console.log('handke ok ');
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

bindRef = (ref: any) => {
}
      render() {
        console.log('res data is:', data);
        console.log('res data keys is:', Object.keys(data));
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const MainForm = createMainForm();
          return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    最终demo
                </Button>
                <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <MainForm  />
                </Modal>
            </div>
          );
      }
  }
  
export function createJsonDemoMainForm(): React.ComponentClass<any> {
  const form: any = RegistrationForm
  return Form.create<any>()(form)
}
