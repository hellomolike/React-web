import React from 'react';
import "./index.less";
import { Collapse } from 'antd';
import { Row, Radio, Col } from 'antd';
class Prerequisites extends React.Component {

    state = {

        value1: 1,
        value2: 1,
        value3: 1,
        value4: 1,
        value5: 1,
        value6: 1,
        value7: 1,
        value8: 1,
        value9: 1,
        value10: 1,
        value11: 1,
        value12: 1,
        value13: 1,
        value14: 1,
    };

    onChange1 = e => {
        console.log('radio1 checked1', e.target.value);
        this.setState({
            value1: e.target.value,
        });
    };
    onChange2 = e => {
        console.log('radio2 checked2', e.target.value);
        this.setState({
            value2: e.target.value,
        });
    };
    onChange3 = e => {
        console.log('radio4 checked4', e.target.value);
        this.setState({
            value3: e.target.value,
        });
    };
    onChange4 = e => {
        console.log('radio5 checked5', e.target.value);
        this.setState({
            value4: e.target.value,
        });
    };
    onChange5 = e => {
        console.log('radio6 checked6', e.target.value);
        this.setState({
            value5: e.target.value,
        });
    };
    onChange6 = e => {
        console.log('radio7 checked7', e.target.value);
        this.setState({
            value6: e.target.value,
        });
    };
    onChange7 = e => {
        console.log('radio8 checked8', e.target.value);
        this.setState({
            value7: e.target.value,
        });
    };
    onChange8 = e => {
        console.log('radio9 checked9', e.target.value);
        this.setState({
            value8: e.target.value,
        });
    };
    onChange9 = e => {
        console.log('radio10 checked10', e.target.value);
        this.setState({
            value9: e.target.value,
        });
    };
    onChange10 = e => {
        console.log('radio11 checked11', e.target.value);
        this.setState({
            value10: e.target.value,
        });
    };
    onChange11 = e => {
        console.log('radio12 checked12', e.target.value);
        this.setState({
            value11: e.target.value,
        });
    };
    onChange12 = e => {
        console.log('radio13 checked13', e.target.value);
        this.setState({
            value12: e.target.value,
        });
    };
    onChange13 = e => {
        console.log('radio14 checked14', e.target.value);
        this.setState({
            value13: e.target.value,
        });
    };
    onChange14 = e => {
        console.log('radio3 checked', e.target.value);
        this.setState({
            value14: e.target.value,
        });
    };
    render() {
        const { Panel } = Collapse;
        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header="先决条件" key="1">

                    <Row>
                        <Col xs={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange1} value={this.state.value1}>
                                <div id="p_size">隔离验证:</div>
                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange2} value={this.state.value2}>
                                <div id="p_size">工业安全的防范措施/高风险许可证要求的安全措施:
                                    </div>
                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <div style={{ margin: '40px 0' }} />
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange3} value={this.state.value3}>
                                <div id="p_size">
                                    辐射防护措施/辐射防护许可证要求的防护措施:
                              </div>
                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange4} value={this.state.value4}>
                                <div id="p_size">
                                    消防措施/动火证（携带危险品）要求的消防措施:
                                </div>

                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <div style={{ margin: '40px 0' }} />
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange5} value={this.state.value5}>
                                <div  id="p_size">化学控制措施:</div>
                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange6} value={this.state.value6}>
                                <div  id="p_size">高风险维修作业的应急预案中要求VVV的安全预防措施。高风险作业期间，工作组成员避免单独作业，应一同开展工作，一起结束工作并离开现场:</div>
                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <div style={{ margin: '40px 0' }} />
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange7} value={this.state.value7}>
                                <div id="p_size">确认所需的材料、备件、工器具的质量与安全等级、有效性、可靠性:</div>
                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <Radio.Group onChange={this.onChange8} value={this.state.value8}>
                            <div id="p_size">熟悉完成维修任务所需的复杂工器具、安全防护用具的使用操作:</div>
                                <Radio value={1}>确认</Radio>
                                <Radio value={2}>不适用</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <div style={{ margin: '40px 0' }} />
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Radio.Group onChange={this.onChange9} value={this.state.value9}>
                            <div id="p_size">维修所需的电站工况、系统工况或设备状态:</div>
                            <Radio value={1}>确认</Radio>
                            <Radio value={2}>不适用</Radio>
                        </Radio.Group>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Radio.Group onChange={this.onChange10} value={this.state.value10}>
                            <div id="p_size">维修所需的现场环境条件（坑洞内的氧含量、照明、通风、应急通道、环境温度、粉尘含量等）:</div>
                            <Radio value={1}>确认</Radio>
                            <Radio value={2}>不适用</Radio>
                        </Radio.Group>
                        </Col>
                    </Row>   
                    <div style={{ margin: '40px 0' }} />
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}> 
                        <Radio.Group onChange={this.onChange11} value={this.state.value11}>
                            <div id="p_size">临时水、电、气源的准备情况:</div>
                            <Radio value={1}>确认</Radio>
                            <Radio value={2}>不适用</Radio>
                        </Radio.Group>
                        </Col> 
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Radio.Group onChange={this.onChange12} value={this.state.value12}>
                            <div id="p_size">维修支持需提前完成的作业（保温、脚手架、放油、土建开挖、防火及实体保卫屏障的临时开启等）:</div>
                            <Radio value={1}>确认</Radio>
                            <Radio value={2}>不适用</Radio>
                        </Radio.Group>
                        </Col> 
                    </Row>
                    <div style={{ margin: '40px 0' }} />
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>  
                        <Radio.Group onChange={this.onChange13} value={this.state.value13}>
                            <div id="p_size">需提前完成的其他逻辑关联维修任务:</div>
                            <Radio value={1}>确认</Radio>
                            <Radio value={2}>不适用</Radio>
                        </Radio.Group>
                        </Col>  
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>      
                        <Radio.Group onChange={this.onChange14} value={this.state.value14}>
                            <div id="p_size">通讯条件确认:</div>
                            <Radio value={1}>确认</Radio>
                            <Radio value={2}>不适用</Radio>
                        </Radio.Group>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>

                );
            }
        }
        
export default Prerequisites;