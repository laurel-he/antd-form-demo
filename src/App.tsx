import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {createMainForm} from './jsonDemo/index'
import { WrappedFormUtils } from 'antd/es/form/Form';
interface UserFormProps{
}
export default class App extends React.Component<UserFormProps, any>{
  constructor(props: UserFormProps) {
      super(props);
    }
    render() {
      const EditForm = createMainForm();
      return (
        <div>
          <h1>11111111</h1>
          <EditForm {...this.props}/>
        </div>
      );
    }
}
