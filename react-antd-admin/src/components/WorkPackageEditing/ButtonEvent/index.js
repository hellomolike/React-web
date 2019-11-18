import { Modal, Button } from 'antd';
import React from 'react';
import TestTC from '../TestTC';


export default class ButtonEvent extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="工作包编辑"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='80%'
          height="80%" >
               
               <div>
                   <TestTC/>
               </div>
        </Modal>
        
      </div>
    );
  }
}
