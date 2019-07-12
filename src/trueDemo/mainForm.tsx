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
import {highPassMainForm} from './HighPass';
import {mekeUpMainForm} from './Makeup'
interface UserFormProps extends FormComponentProps {
    data: object,
    triggerRef: any
  }
class MainForm extends React.Component<UserFormProps, any>{
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
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                {this.getForm(data.params.list)}
              </Form>
            </div>
          );
      }
}
export function createMainForm(): React.ComponentClass<any> {
    const form: any = MainForm
    return Form.create<any>()(form)
  }