
import { Button } from 'antd';
import React from 'react';
import './index.less';


class WorkOrder extends React.Component {

  // state = {
  //   value: '',
  // };

  // onChange = ({ target: { value } }) => {
  //   this.setState({ value });
  // };


  render() {

    // const { value } = this.state;
    const onChange = e => {
      console.log(e);
    };

    return (
      <fieldset>
        <legend>工作指令</legend>
        <div>
          <div id="font_title">工作来源：</div>
          <textArea className="textArea_input" placeholder="textarea with clear icon"  onChange={onChange} />

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">缺陷分析：</div>
          <textArea className="textArea_input" placeholder="textarea with clear icon"  onChange={onChange} />

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">工器具材料：</div>
          <textArea className="textArea_input" placeholder="textarea with clear icon"  onChange={onChange} />

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">工器具材料：</div>
          <textArea className="textArea_input" placeholder="textarea with clear icon"  onChange={onChange} />

          <div style={{ margin: '24px 0' }} />
          <div id="font_title">工作步骤：</div>
          <textArea className="textArea_input2" placeholder="textarea with clear icon"  onChange={onChange} />
        </div>
        <div>
          <Button id="save_but" type="primary">保存</Button>

          <Button id="submit_but" type="primary">关闭</Button>
        </div>



      </fieldset>
    );
  }
}

export default WorkOrder;

