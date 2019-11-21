import { Table, Button, Input } from 'antd';
import React from 'react';
import './index.less';
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
        title: '电厂',
        dataIndex: '电厂代码',
    },
    {
        title: '机组',
        dataIndex: '机组号',
    },
    {
        title: '系统',
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
const { Search } = Input;
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        操作: <div>

            <Button type="small" shape="circle" icon="search">
                {/* <Testpopupeffect /> */}
            </Button>

        </div>
        ,
        工单任务标题: `测试工作申请【T190929389${i}】`,
        工单任务编号: `T190929389${i}`,
        电厂代码: `XNPC`,
    });
}

export default class Jobapplication extends React.Component {

    state = {
        selectedRowKeys: [], // Check here to configure the default column
    };

    onSelectChange = selectedRowKeys => {
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
        return (<div>
            <div>
                快速查询：
                <Input size="large"  placeholder="工作申请编号/工作申请标题"  className="input_sty"></Input>&nbsp;&nbsp;&nbsp;
                <Button  type="primary">search</Button>
                

            </div>
            <div style={{ margin: '30px 0' }} />
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
        );
    }
}

