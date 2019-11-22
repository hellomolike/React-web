import { Collapse,Button,Input,Table } from 'antd';
import React from 'react';
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
        title: '会议标题',
        dataIndex: '会议标题',
    },
    {
        title: '工单类型',
        dataIndex: '工单类型',
    },
    {
        title: '工作负责人',
        dataIndex: '工作负责人',
    },
    {
        title: '召开人',
        dataIndex: '召开人',
    },
    {
        title: '召开时间',
        dataIndex: '召开时间',
    },
    {
        title: '完成时间',
        dataIndex: '完成时间',
    },
    {
        title: '工前会状态',
        dataIndex: '工前会状态',
    },
    {
        title: '是否已发送通知',
        dataIndex: '是否已发送通知',
    },


];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        操作: <div>

            <Button type="small" shape="circle" icon="search">
                {/* <Testpopupeffect /> */}
            </Button>
            <Button type="small" shape="circle" icon="edit" />

        </div>
        ,
        会议标题: `测试工作申请【T190929389${i}】`,
        工单类型: `标准工单`,
        工作负责人: `陈澄`,
        召开人: `陈澄`,
        召开时间: `2019年12月6号`,
        完成时间: `2019年12月18号`,
        工前会状态: `准备就绪`,
        是否已发送通知: `否`

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
                            <Button type="primary" shape="circle" icon="search"></Button>
                        </div>
                        <div style={{ margin: '30px 0' }} />
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </Panel>
                </Collapse>
            </div>
        );

    }
}
