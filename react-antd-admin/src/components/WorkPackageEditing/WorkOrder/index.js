
import { Button, Collapse, Input } from 'antd';
import React from 'react';
import './index.less';
const {TextArea}=Input;

class WorkOrder extends React.Component {

  // state = {
  //   value: '',
  // };

  // onChange = ({ target: { value } }) => {
  //   this.setState({ value });
  // };


  render() {
    const { Panel } = Collapse;

    // const { value } = this.state;
    const onChange = e => {
      console.log(e);
    };

    return (
      <Collapse defaultActiveKey={['1']}>
        <Panel header="工作指令" key="1">
          <div>
            <div id="font_title">工作来源：</div>
            <div>
            <TextArea></TextArea>
          </div>

            <div style={{ margin: '24px 0' }} />
            <div id="font_title">缺陷分析：</div>
            <div>
            <TextArea ></TextArea>
          </div>

            
            <div style={{ margin: '24px 0' }} />
            <div id="font_title">工器具材料：</div>
            <div>
            <TextArea></TextArea>
          </div>

            <div style={{ margin: '24px 0' }} />
            <div id="font_title">工作步骤：</div>
            <div>
            <TextArea></TextArea>
          </div>
          </div>
         
        </Panel>
      </Collapse>




    );
  }
}

export default WorkOrder;

