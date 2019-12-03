import { Collapse, Input, Button, Table } from 'antd';
import React from 'react';
import './index.less';
import Relatedaddfile from './File/Relatedaddfile';




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
        title: '工号',
        dataIndex: '工号',
    },
    {
        title: '姓名',
        dataIndex: '姓名',
    },
    {
        title: '部门',
        dataIndex: '部门',
    },
   


];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        操作: <div>
            <Button type="small" shape="circle" icon="delete" />
        </div>
        ,
        工号: `9527${i}`,
        姓名: `chengchen`,
        部门: `技术部`,
     
    });
}

export default class Relatedpersonnel extends React.Component {

    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

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
                    <Panel header="规程信息" key="1">
                        <div>
                            快速查询：
                            <Input size="large" placeholder="会议标题" className="input_sty"></Input>&nbsp;&nbsp;&nbsp;
                            <Button type="primary" shape="circle" icon="search"></Button>&nbsp;
                            <Button type="primary" shape="circle">

                            <Relatedaddfile />
                            </Button>&nbsp;
                            <Button type="primary" shape="circle" icon="delete"></Button>&nbsp;


                        </div>
                        <div style={{ margin: '30px 0' }} />
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </Panel>

                </Collapse>
            </div>
        );

    }
}