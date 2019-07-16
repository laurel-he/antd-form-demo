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
    Switch
  } from 'antd';
  import * as React from 'react';
  import { FormComponentProps } from 'antd/lib/form';
  import { WrappedFormUtils } from 'antd/es/form/Form';
import data from '../jsonDemo/data';
import { objectProperty } from '@babel/types';
interface UserFormProps extends FormComponentProps {
}
 export class HighPassForm extends React.Component<UserFormProps, any>{
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
        console.log('High pass props:', this.props);
        const { getFieldDecorator } = this.props.form;
        console.log('list:', data.params.list);
        console.log('res data keys is:', Object.keys(data));
        const keys = Object.keys(data);
        const { Panel } = Collapse;
        const resData = {
            "enable":true,
            "description":"高反差保留",
            "type":"HighPass",
            "param_a":0.0033,
            "param_b":1.259,
            "useFaceMask":{
                "enable":true,
                "blendOpacity":50,
                "blendMode":9,
                "contentMode":1,
                "alignmentMode":1,
                "gaussianBlur":1,
                "rad_reverse":0
            }
        };
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
            <Collapse accordion>
                    <Panel header={resData.description} key="1">
                        <Form.Item
                        label={
                            <span>
                            param_a
                            </span>
                            }
                        >
                        <Input value={resData.param_a}/>
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                param_b
                                </span>
                                }
                            >
                            <Input value={resData.param_b}/>
                        </Form.Item>
                    <Collapse defaultActiveKey={['2']}>
                          <Panel header="useFaceMask" key="1">
                          <Form.Item
                          label={
                              <span>
                              是否启用
                              </span>
                              }
                          ><Switch
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            defaultChecked
                            />
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                blendOpacity
                                </span>
                                }
                            >
                            <Input value={resData.useFaceMask.blendOpacity}/>
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                blendMode
                                </span>
                                }
                            >
                            <Input value={resData.useFaceMask.blendMode}/>
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                contentMode
                                </span>
                                }
                            >
                            <Input value={resData.useFaceMask.contentMode}/>
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                alignmentMode
                                </span>
                                }
                            >
                            <Input value={resData.useFaceMask.alignmentMode}/>
                        </Form.Item>
                          </Panel>
                      </Collapse>
                    </Panel>
                </Collapse>
            </div>
          );
      }
  }
