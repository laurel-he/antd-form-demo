import {
    Form,
    Input,
    Layout,
    Icon,
    Collapse,
    Select,
    Row,
    Tree,
    Switch,
    Button,
    Radio,
    Modal
  } from 'antd';
  import * as React from 'react';
  import { FormComponentProps } from 'antd/lib/form';
  import { WrappedFormUtils } from 'antd/es/form/Form';
import './index.css';
import data from './data';
import mapping from './map';
import treeRule from './tree';
import { objectProperty } from '@babel/types';
import { number, string } from 'prop-types';
  interface UserFormProps extends FormComponentProps {
    age: number;
    name: string;
  }
 class RegistrationForm extends React.Component<UserFormProps, any>{
    constructor(props: UserFormProps) {
        super(props);
      }
      state = { visible: false,
        treeData: [],
        treeNodeData: [],
      };
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

handleRender(tree: string, resData: any, moduleName: string, i: number) {
  // const type = resData.moduleName.tree;
  if (resData) {
    const { getFieldDecorator } = this.props.form;
    const resRender = resData[tree];
    let k = 0;
    if (resData[tree]) {
      const renderData = resData[tree];
      console.log('renderData---------', renderData);
      console.log('renderData--type-------', renderData['type']);
      switch(renderData['type']) {
        case "switch":
          return (<Form.Item
            label={
                <span>
                {renderData['chinese']}
                </span>
                }
              key={i}
            >{getFieldDecorator(tree, {})(
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              defaultChecked={renderData.enable}
              disabled={renderData['readyOnly']}
              />)}
              </Form.Item>);
          break;
        case "radioNumber":
          return (<Form.Item
            label={
                <span>
                {renderData['chinese']}
                </span>
                }
             key={i}
            >
            {getFieldDecorator('baiYa', {})(<Radio.Group >
            {mapping['ly'].mapV.map((items) => {
              k++;
                return (
                    <Radio.Button key={k} value={items.map}>{items.oriValue}</Radio.Button>
                );
            })}
            </Radio.Group>)}</Form.Item>);
        break;
        case "input":
            return (<Form.Item
              label={
                  <span>
                  {renderData['chinese']}
                  </span>
                  }
              key={i}
              >
              {getFieldDecorator('baiYa', {})(
              <Input />)}</Form.Item>);
        break;
        case "radioOne":
              return (<Form.Item
                label={
                    <span>
                    {renderData['chinese']}
                    </span>
                    }
                 key={i}
                >
                {getFieldDecorator('radReverse', {})(
                <Radio.Group >
                  <Radio value={0}>是</Radio>
                  <Radio value={1}>否</Radio>
              </Radio.Group>)}
            </Form.Item>);
        break;
        case "Collapse":
              return (<Form.Item
                label={
                    <span>
                    {renderData['chinese']}
                    </span>
                    }
                key={i}
                >
                {getFieldDecorator('radReverse', {})(
                <Radio.Group >
                  <Radio value={0}>是</Radio>
                  <Radio value={1}>否</Radio>
              </Radio.Group>)}
            </Form.Item>);
        break;
        default:
            console.error('lack of type:' + resRender['type'] + ', please check the type!!!');
        break;
    }
    }
  }
}
getAllKey (obj: any, name: string, moduleName?: string): any[] {
  const arr: any[] = []
    if (Object.keys(obj)) {
      let keys = Object.keys(obj);
      let i = 0;
      return keys.map((items) => {
        i++;
        if (obj[items] instanceof Object) {
          // console.log("obj[items]:", items);
          let itemRes = items;
          if (obj[items]['type']) {
            // console.log('it is number:', obj[items]['type']);
            itemRes = obj[items]['type'];
          }
          const names = name + '-' + itemRes
          return this.getAllKey(obj[items], names, moduleName);
        } else {
          // console.log('items:', name + '-' + items);
          const resItems = name + '-' + items;
          // console.log('split array:', resItems.split('-'));
          if (resItems == moduleName) {
            return this.handleRender(resItems, treeRule.modules, moduleName, i);
          }
          // return (
          //   <Form.Item
          //       label={
          //           <span>
          //           {items}
          //           </span>
          //           }
          //       >
          //       <Input value={obj[items]}/>
          //   </Form.Item>
          // );
        }
        // console.log('isExtensible', Object.isExtensible(obj[items]));
        // this.getAllKey(obj);
      });
    }
console.log('arr', arr)
    return arr
}
/** 数据加载之前展示所有层级 */
pannelList(treeTrees: any, resPanel: any[]) :any[]{
  const { Panel } = Collapse;
  console.log('treeTrees', treeTrees)
  let i = 0;
  let k = 0;
  Object.keys(treeTrees).map((treeItem) => {
    i++;
    console.log('treeTrees[treeItem][chinese]', treeTrees[treeItem]['chinese']);
    if (treeTrees[treeItem]['show'] == true) {
      resPanel.push(<Panel header={treeTrees[treeItem]['chinese']} key={i.toString()}></Panel>)
      if (treeTrees[treeItem]['child']) {
        k++;
        let childPanel = resPanel;
        resPanel.push(<Collapse key={k.toString()}>
        <Panel header={treeTrees[treeItem]['chinese']} key={i.toString()}></Panel>
        </Collapse>)
        return this.pannelList(treeTrees[treeItem]['child'], resPanel);
      }
      }
  })
  return resPanel
}
      render() {
        console.log('treeRule:', treeRule);
        const { getFieldDecorator } = this.props.form;
        const treeModules: any = treeRule.modules;
        const treeTrees: any = treeRule.tree;
        const { Panel } = Collapse;
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
                <Collapse defaultActiveKey={['1']}>
                {this.pannelList(treeTrees, [])}
                </Collapse>
                {Object.keys(treeModules).map((tree) => {
                  return this.getAllKey(data, 'data', tree)
                })}
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
