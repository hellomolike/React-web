import { Modal, Button } from 'antd';
import React from 'react';
import './index.less';
import Tabeffect from '../Test tab effect';


export default class Testpopupeffect extends React.Component {
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
        <Button type="small" shape="circle" icon="edit" onClick={this.showModal}>
        </Button>
        <Modal
          visible={visible}
          title="工作包编辑"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='100%'
          height="100%" >
               <div>
                   <Tabeffect />
               </div>
        </Modal>
        
      </div>
    );
  }
}
