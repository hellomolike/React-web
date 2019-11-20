import { Input } from 'antd';
import { Button } from 'antd';
import React from 'react';
import "./index.less";

class Isolation extends React.Component {

    // state = {
    //   value: '',
    // };
  
    // onChange = ({ target: { value } }) => {
    //   this.setState({ value });
    // };
  
  
    render() {
        const {TextArea}=Input;
  
      // const { value } = this.state;
      const onChange = e => {
        console.log(e);
      };
  
      return (
        <fieldset>
        <legend>隔离安措要求</legend>
        <div>
          <div id="font_title">大纲要求：</div>
          <textArea className="textArea_input" defaultValue="hello world"   onChange={onChange} />
         

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">隔离要求：</div>
           <textArea className="textArea_input" defaultValue="hello world"   onChange={onChange} />

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">修后试验名称：</div>
           <textArea className="textArea_input"defaultValue="hello world"  onChange={onChange} />

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">临时签出需解除安措：</div>
           <textArea className="textArea_input" defaultValue="hello world"  onChange={onChange} />

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">零时签出需新增的安措，如联锁外送信号等：</div>
          <textArea className="textArea_input2" defaultValue="hello world"   onChange={onChange} />
        </div>
        <div>
          <Button id="save_but" type="primary">保存</Button>

          <Button id="submit_but" type="primary">关闭</Button>
        </div>



      </fieldset>
      );
    }
  }
  
  export default Isolation;