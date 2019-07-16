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
interface UserFormProps extends FormComponentProps {
}
export class MakeUpForm extends React.Component<UserFormProps, any>{
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
conditionalJudgment(header: string, shoulian: any, xiaolian: any, vlian:any) {
    const { Panel } = Collapse;
    return (
        <Collapse defaultActiveKey={['2', '1', '1']}>
            <Panel header={header} key="2">
                <Form.Item
                label={
                    <span>
                        瘦脸
                    </span>
                    }
                >
                    <Input value={shoulian}/>
                </Form.Item>
                <Form.Item
                label={
                    <span>
                        小脸
                    </span>
                    }
                >
                    <Input value={xiaolian}/>
                </Form.Item>
                <Form.Item
                label={
                    <span>
                        V脸
                    </span>
                    }
                >
                    <Input value={vlian}/>
                </Form.Item>
            </Panel>
        </Collapse>
    );
}
      render() {
        const { Panel } = Collapse;
        const { getFieldDecorator } = this.props.form;
        console.log('res data params is:', data.params);
        console.log('res data keys is:', Object.keys(data));
        const keys = Object.keys(data);
        const resData = {
            "enable":true,
            "description":"美妆",
            "type":"Makeup",
            "baiYa":0,
            "liangYan":10,
            "men":{
                "faLingWen":0,
                "yuWeiWen":0,
                "heiYanQuan":0,
                "shouBi":0,
                "daYan":12,
                "daYanRight":12,
                "conditionalJudgment":{
                    "shouLian":10,
                    "xiaoLian":0,
                    "VLian":15
                },
                "conditionalJudgmentRight":{
                    "shouLian":10,
                    "xiaoLian":0,
                    "VLian":15
                },
                "isEnableMask":false,
                "isEnforceMake":true
            },
            "women":{
                "faLingWen":0,
                "yuWeiWen":0,
                "heiYanQuan":0,
                "shouBi":0,
                "daYan":12,
                "daYanRight":12,
                "conditionalJudgment":{
                    "shouLian":10,
                    "xiaoLian":0,
                    "VLian":15
                },
                "conditionalJudgmentRight":{
                    "shouLian":10,
                    "xiaoLian":0,
                    "VLian":15
                },
                "isEnableMask":false,
                "isEnforceMake":true
            }
        };
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
                            baiYa
                            </span>
                            }
                        >
                        <Input value={resData.baiYa}/>
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                liangYan
                                </span>
                                }
                            >
                            <Input value={resData.liangYan}/>
                        </Form.Item>
                    <Collapse defaultActiveKey={['2', '1']}>
                          <Panel header="men" key="1">
                            <Form.Item
                            label={
                                <span>
                                法令纹
                                </span>
                                }
                            >
                                <Input value={resData.men.faLingWen}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                鱼尾纹
                                </span>
                                }
                            >
                                <Input value={resData.men.yuWeiWen}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                黑眼圈
                                </span>
                                }
                            >
                                <Input value={resData.men.heiYanQuan}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                瘦鼻
                                </span>
                                }
                            >
                                <Input value={resData.men.shouBi}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                大眼
                                </span>
                                }
                            >
                                <Input value={resData.men.daYan}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                大眼右
                                </span>
                                }
                            >
                                <Input value={resData.men.daYanRight}/>
                            </Form.Item>
                                { this.conditionalJudgment('conditionalJudgment', resData.men.conditionalJudgment.shouLian, resData.men.conditionalJudgment.xiaoLian,resData.men.conditionalJudgment.VLian)}
                                { this.conditionalJudgment('conditionalJudgment', resData.men.conditionalJudgmentRight.shouLian, resData.men.conditionalJudgmentRight.xiaoLian,resData.men.conditionalJudgmentRight.VLian)}
                          </Panel>
                          <Panel header="woman" key="2">
                            <Form.Item
                            label={
                                <span>
                                法令纹
                                </span>
                                }
                            >
                                <Input value={resData.women.faLingWen}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                鱼尾纹
                                </span>
                                }
                            >
                                <Input value={resData.women.yuWeiWen}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                黑眼圈
                                </span>
                                }
                            >
                                <Input value={resData.women.heiYanQuan}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                瘦鼻
                                </span>
                                }
                            >
                                <Input value={resData.women.shouBi}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                大眼
                                </span>
                                }
                            >
                                <Input value={resData.women.daYan}/>
                            </Form.Item>
                            <Form.Item
                            label={
                                <span>
                                daYanRight
                                </span>
                                }
                            >
                                <Input value={resData.women.daYanRight}/>
                            </Form.Item>
                            { this.conditionalJudgment('conditionalJudgment', resData.women.conditionalJudgment.shouLian, resData.women.conditionalJudgment.xiaoLian,resData.women.conditionalJudgment.VLian)}
                            { this.conditionalJudgment('conditionalJudgment', resData.women.conditionalJudgmentRight.shouLian, resData.women.conditionalJudgmentRight.xiaoLian,resData.women.conditionalJudgmentRight.VLian)}
                          </Panel>
                      </Collapse>
                    </Panel>
                </Collapse>
            </div>
          );
      }
  }
