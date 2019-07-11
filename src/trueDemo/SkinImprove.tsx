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
import data from '../jsonDemo/data';
import { objectProperty } from '@babel/types';
  interface UserFormProps extends FormComponentProps {
    age: number;
    name: string;
  }
 class SkinImproveForm extends React.Component<UserFormProps, any>{
    constructor(props: UserFormProps) {
        super(props);
      }
    
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
        const { Panel } = Collapse;
        const { getFieldDecorator } = this.props.form;
        console.log('res data params is:', data.params);
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
            <Form.Item
            label={
                <span>
                eAutoLevelOperationType
                </span>
                }
            ><Input value="ALL_RGB_OPERATION"/>
         </Form.Item>
          );
      }
  }
  
  export function skinImproveMainForm(): React.ComponentClass<any> {
    const form: any = SkinImproveForm
    return Form.create<any>()(form)
  }
