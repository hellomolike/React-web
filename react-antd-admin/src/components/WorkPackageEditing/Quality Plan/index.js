import { Collapse } from 'antd';
import React from 'react';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class Qualityplan extends React.Component {
    render() {
        const { Panel } = Collapse;
        return (
            <div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                    </Panel>

                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        );

    }
}

