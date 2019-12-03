import { Table, Button } from 'antd';
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
        title: '工单任务编号',
        dataIndex: '工单任务编号',
    },
    {
        title: '工单任务标题',
        dataIndex: '工单任务标题',
    },
    {
        title: '电厂代码',
        dataIndex: '电厂代码',
    },
    {
        title: '机组号',
        dataIndex: '机组号',
    },
    {
        title: '系统号',
        dataIndex: '系统号',
    },
    {
        title: '设备编码',
        dataIndex: '设备编码',
    },
    {
        title: '工单类型',
        dataIndex: '工单类型',
    },
    {
        title: '流程状态',
        dataIndex: '流程状态',
    },
    
];
const data:{ key: number; 操作: JSX.Element; 工单任务标题: string; 工单任务编号: string; 电厂代码: string; }[] | undefined = [];

for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        操作: <div>
            <Button  shape="circle" icon="search" />
            <Button  shape="circle" icon="edit">
                {/* <Testpopupeffect /> */}
            </Button>
            <Button  shape="circle" icon="delete" />
            
            <Button  shape="circle" icon="setting" />
        </div>
        ,
        工单任务标题: `测试工作申请【T190929389${i}】`,
        工单任务编号: `T190929389${i}`,
        电厂代码: `XNPC`,
    });
}

export default class ReadyPackage extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
    };

    onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
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
                    onSelect: (changableRowKeys: { filter: (arg0: (key: any, index: any) => boolean) => any[]; }) => {
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
                    onSelect: (changableRowKeys: { filter: (arg0: (key: any, index: any) => boolean) => any[]; }) => {
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
        return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
    }
}

