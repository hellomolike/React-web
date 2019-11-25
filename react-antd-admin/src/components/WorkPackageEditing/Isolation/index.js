import { Input } from 'antd';
import { Button, Collapse } from 'antd';
import React from 'react';
import "./index.less";
const {TextArea}=Input
class Isolation extends React.Component {

  // state = {
  //   value: '',
  // };

  // onChange = ({ target: { value } }) => {
  //   this.setState({ value });
  // };


  render() {
    
    const { Panel } = Collapse;
    const {textArea} =Input;
    // const { value } = this.state;
    const onChange = e => {
      console.log(e);
    };

    return (
      <Collapse defaultActiveKey={['1']}>
        <Panel header="隔离安措要求" key="1">
        <div>
          <div id="font_title" >大纲要求：</div>
          <div>
           <TextArea></TextArea>
          </div>

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">隔离要求：</div>
          <div>
          <TextArea></TextArea>

          </div>
          <div style={{ margin: '24px 0' }} />
          <div id="font_title">修后试验名称：</div>
          <div>
          <TextArea></TextArea>

          </div>
          <div style={{ margin: '24px 0' }} />
          <div id="font_title">临时签出需解除安措：</div>
          <div>
          <TextArea></TextArea>

          </div>

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">零时签出需新增的安措，如联锁外送信号等：</div>
           <div>
           <TextArea></TextArea>

          </div>
        </div>
     
        </Panel>
      </Collapse>
      );
  }
}

export default Isolation;