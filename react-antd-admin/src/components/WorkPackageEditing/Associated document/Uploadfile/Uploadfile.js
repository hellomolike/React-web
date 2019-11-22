import { Upload, message, Button, Modal,Icon } from 'antd';
import React from 'react';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
export default class Uploadfile extends React.Component {
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
                <Button type="primary" shape="circle" icon="upload" onClick={this.showModal}>
                </Button>
                <Modal
                    title="文件上传"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Upload {...props}>
                        <Button>
                        <Icon type="upload" /> Click to Upload
                        </Button>
                    </Upload>

                </Modal>
            </div>
        );

    }


}
