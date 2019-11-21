import { Tabs, Radio } from 'antd';
import React from 'react';
import WorkOverView from '../WorkOverView';

import Isolation from '../Isolation';
import Prerequisites from '../Prerequisites';
import WorkOrder from '../WorkOrder';
import Jobapplication from '../Job application';

const { TabPane } = Tabs;

class Tabeffect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };

    render() {
        const { mode } = this.state;
        return (
            <div>
                <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom:20}}>
                   
                </Radio.Group>
                <Tabs tabPosition={mode} style={{ height:"auto"}}>
                    <TabPane tab="工作概述" key="2">
                        <div>
                           <WorkOverView />
                        </div>
                    </TabPane>
                    <TabPane tab="工作指令" key="3">
                        <div>
                            <WorkOrder />
                        </div>
                    </TabPane>
                    <TabPane tab="隔离安措要求" key="4">
                        <div>
                            <Isolation />
                        </div>
                    </TabPane>
                    <TabPane tab="先决条件" key="5">
                        <div>
                            <Prerequisites />
                        </div>
                    </TabPane>
                    <TabPane tab="工作申请" key="6">
                        <div>
                           <Jobapplication />
                        </div>
                    </TabPane>
                    <TabPane tab="工前会" key="7">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="执行规程" key="8">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="关联文档" key="9">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="质量计划" key="10">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="相关人员" key="11">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="风险分析" key="12">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="隔离许可证" key="13">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="配合工作" key="14">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="许可证" key="15">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="工器具-物料" key="16">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="公会后" key="17">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="维修报告" key="18">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="维修记录" key="19">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="迁入迁出历史" key="20">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Tabeffect;
