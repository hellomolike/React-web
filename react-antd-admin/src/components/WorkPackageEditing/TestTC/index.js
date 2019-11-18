import { Tabs, Radio } from './node_modules/antd';
import React from './node_modules/react';
import ReadyPackage from '../ReadyPackage';
const { TabPane } = Tabs;

class TestTC extends React.Component {
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
                <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                   
                </Radio.Group>
                <Tabs tabPosition={mode} style={{ height: 600 }}>

                    <TabPane tab="TAB-1" key="1">
                        <div>
                            <ReadyPackage />
                        </div>
                    </TabPane>
                    <TabPane tab="TAB-2" key="2">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="TAB-3" key="3">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="TAB-4" key="4">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="TAB-5" key="5">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                    <TabPane tab="TAB-6" key="6">
                        <div>
                            hello everyone!
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TestTC;
