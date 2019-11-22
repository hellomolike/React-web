import { Collapse,Button,Input,Table } from 'antd';
import React from 'react';
import Uploadfile from './Uploadfile/Uploadfile';
const columns = [
    {
        title: '序号',
        dataIndex: 'key',
    },
    {
        title: '操作',
        dataIndex: '操作',
    },
    {
        title: '文档编码',
        dataIndex: '文档编码',
    },
    {
        title: '文档标题',
        dataIndex: '文档标题',
    },
    {
        title: '文档类型',
        dataIndex: '文档类型',
    },
    {
        title: '文档版本',
        dataIndex: '文档版本',
    },
    


];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        操作: <div>

            <Button type="small" shape="circle" icon="download">
                
            </Button>
            <Button type="small" shape="circle" icon="delete" />

        </div>
        ,
        文档编码: `D186123135`,
        文档类型: `pdf`,
        文档标题: `GIT操作笔记`,
        文档版本: `v1.01`,
        

    });
}

export default class Associateddocument extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { Panel } = Collapse;
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: 'Select All Data',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()], // 0...45
                        });
                    },
                },
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };
        return (
            <div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="文档信息" key="1">
                        <div>
                            快速查询：
                            <Input size="large" placeholder="会议标题" className="input_sty"></Input>&nbsp;&nbsp;&nbsp;
                            <Button type="primary" shape="circle" icon="search"></Button>&nbsp;
                            <Button type="primary" shape="circle">
                                <Uploadfile />
                                </Button>&nbsp;
                            <Button type="primary" shape="circle" icon="delete"></Button>



                        </div>
                        <div style={{ margin: '30px 0' }} />
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </Panel>
                </Collapse>
            </div>
        );

    }
}
