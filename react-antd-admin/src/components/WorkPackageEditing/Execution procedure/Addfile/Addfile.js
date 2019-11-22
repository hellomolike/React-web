import { Modal, Button,Input } from 'antd';
import React from 'react';

 export default class Addfile extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" shape="circle" icon="plus" onClick={this.showModal}>
        </Button>
        <Modal
          title="添加"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            编号：<Input></Input><br/>
            标题：<Input></Input><br/>
            备注：<Input></Input>
          
         
        </Modal>
      </div>
    );
  }
}

