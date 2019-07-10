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
import './index.css';
import data from './data';
import { objectProperty } from '@babel/types';
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
getAllKey (obj: any): any[] {

  const arr: any[] = []

  // console.log(Object.keys(obj));
    if (Object.keys(obj)) {
      let keys = Object.keys(obj);
      return keys.map((items) => {
        // console.log('params', items);
        // console.log('params value is ', obj[items]);
        if (obj[items] instanceof Object) {
          return this.getAllKey(obj[items]);
        } else {
          console.log('1 items', items);
          console.log('the off values is', obj[items]);
          return (
            <Form.Item
                label={
                    <span>
                    {items}
                    </span>
                    }
                >
                <Input value={obj[items]}/>
            </Form.Item>
          );
        }
        // console.log('isExtensible', Object.isExtensible(obj[items]));
        // this.getAllKey(obj);
      });
    }
console.log('arr', arr)
    return arr
}
      render() {
        const { Panel } = Collapse;
        const { getFieldDecorator } = this.props.form;
        console.log('res data is:', data);
        console.log('res data keys is:', Object.keys(data));
        const keys = Object.keys(data);
        const text = `
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
            `;
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
                    Open Modal
                </Button>
                <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                {this.getAllKey(data)}
                <Collapse accordion>
                    <Panel header="base" key="1">
                        <Form.Item
                        label={
                            <span>
                                version
                            </span>
                            }
                        >
                            {getFieldDecorator('version', {
                            rules: [{ required: true, message: 'Please input version', whitespace: true }],
                            })(<Input />)}
                    </Form.Item>
                    </Panel>
                    <Panel header="params" key="2">
                      <Collapse defaultActiveKey={['2']}>
                          <Panel header="auto_levels" key="1">
                            <Collapse defaultActiveKey={['2', '1']}>
                            <Panel header="0" key="1">
                              <Form.Item
                              label={
                                  <span>
                                  eAutoLevelOperationType
                                  </span>
                                  }
                              ><Input value="ALL_RGB_OPERATION"/>)}
                           </Form.Item>
                          <Form.Item
                          label={
                              <span>
                              fHigCutL
                              </span>
                              }
                          ><Input value="0.01"/>)}
                      </Form.Item>
                      <Form.Item
                          label={
                              <span>
                              fHigCutR
                              </span>
                              }
                          ><Input value="0.01"/>)}
                      </Form.Item>
                            </Panel>
                          </Collapse>
                          </Panel>
                      </Collapse>
                    </Panel>
                </Collapse>
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
