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
  import { WrappedFormUtils } from 'antd/es/form/Form';
  import {highPassMainForm} from './HighPass';
import data from '../jsonDemo/data';
import {mekeUpMainForm} from './Makeup'
import { objectProperty } from '@babel/types';
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

getForm (list: any): any[] {
  const view = [];
  const HighPassForm = highPassMainForm();
  const MakeUpForm = mekeUpMainForm();
  for (let i = 0; i < list.length; i++) {
    if (list[i].enable === true) {
        switch(list[i]['type']) {
          case 'HighPass':
            view.push (
              <HighPassForm />
            );
            break;
          case 'Makeup':
            view.push (
              <MakeUpForm {...this.props}/>
            );
          default:
          break; 
        }
    }
  }
  return view;
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
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                {this.getForm(data.params.list)}
              </Form>
                </Modal>
            </div>
          );
      }
  }
  
  export function createJsonDemoMainForm(): React.ComponentClass<any> {
    const form: any = RegistrationForm
    return Form.create<any>()(form)
  }
