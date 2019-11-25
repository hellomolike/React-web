import { Collapse, Input, Radio, DatePicker, InputNumber } from 'antd';
import React from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import './index.less';
const dateFormat = 'YYYY/MM/DD';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class WokrOverView extends React.Component {

    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {

        const { Panel } = Collapse;
        return (
            <div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="工作概述" key="1">
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                工单任务编号：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                任务状态：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                工单类型：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                生产单元：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                电厂代码：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                机组号：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                系统号：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                设备编码：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                系统/设备名称：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                专业：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                优先级：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                设备分级：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                厂区房间：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                核安全等级：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                维修分级：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                质保等级：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                计划人数：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                维修类别：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                责任班组：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                责任人：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                防异物分级：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                工作班组：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                工作负责人：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                工作准备人：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                作业类型：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                设备管辖处室：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                危险化学品：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    日常大修标识：<div></div>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                </Radio.Group>
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                大修代码：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                变更项目编号：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row >
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 22, offset: 2 }}>
                                工单任务标题：<Input></Input>
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                等效工单编号：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                取消/等效类型：<Input />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                操作人：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                时间：<Input />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 22, offset: 2 }}>

                                原因：<div></div>
                                <textArea className="textarea_input" />
                            </Col>
                        </Row>
                    </Panel>

                </Collapse>
                <Collapse defaultActiveKey={['2']}>
                    <Panel header="计划" key="2">
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <span>计划开工时间:</span>
                                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <span>计划完工时间:</span>

                                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <span>工时（小时）:</span>

                                <InputNumber min={1} max={10} defaultValue={1} />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                建议开工时间:
                                    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                建议完工时间:
                                    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </Col>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                计划完工延期时间:
                                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col className="row_item" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                PM最早开工时间:
                                    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 2 }}>
                                PM最晚完开工时间:
                                    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            </Col>
                        </Row>
                    </Panel>
                </Collapse>
                <Collapse defaultActiveKey={['3']}>
                    <Panel header="其他" key="3">
                        <Row>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    日常大修标识：
                            <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                </Radio.Group>
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 2 }}>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    大修标识：
                            <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    日常大修标识：
                            <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                </Radio.Group>
                            </Col>
                            <Col className="row_item" xs={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 2 }}>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    大修标识：
                            <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        <div style={{ margin: '24px 0' }} />
                        <Row>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    日常大修标识：
                            <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                </Radio.Group>
                            </Col>
                            
                            <Col className="row_3" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                    取消/等效类型：
                               <Input></Input>
                            </Col>
                            
                        </Row>
                        <Row>
                         
                            <Col className="row_3" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            操作人：
                            <Input></Input>
                            </Col>
                        </Row>
                    </Panel>
                </Collapse>
            </div>
        );

    }
}
