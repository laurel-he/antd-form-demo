import * as React from 'react';
import { List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { formShape } from "rc-form"
export interface FormEditorProps {
    form: formShape
    onSubmit: (value: any) => any
  }
  
class MainForm extends React.Component<FormEditorProps, any> {

}
