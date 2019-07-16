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
import {HighPassForm} from './HighPass';
import {MakeUpForm} from './Makeup'
interface UserFormProps extends FormComponentProps {
    data: object,
    triggerRef: any
  }
class MainForm extends React.Component<UserFormProps, any>{
    getForm (list: any): any[] {
        const view = [];
        for (let i = 0; i < list.length; i++) {
          if (list[i].enable === true) {
              switch(list[i]['type']) {
                case 'HighPass':
                  view.push (
                    <HighPassForm {...this.props}/>
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
      componentDidMount() {
          this.props.triggerRef(this)
      }
      handleSubmit() {
        console.log('handleSubmit');
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
getAllValue= ()=>{    //3、自定义方法，用来传递数据（需要在父组件中调用获取数据）
  const values= this.props.form.getFieldsValue();       //4、getFieldsValue：获取一组输入控件的值，如不传入参数，则获取全部组件的值
  return values;
}
    render() {
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
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
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                {this.getForm(data.params.list)}
                <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
              </Form>
            </div>
          );
      }
}
export function createMainForm(): React.ComponentClass<any> {
    const form: any = MainForm
    return Form.create<any>()(form)
  }