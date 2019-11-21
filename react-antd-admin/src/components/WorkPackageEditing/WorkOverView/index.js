import React from 'react';
import { Checkbox } from 'antd';
import './index.less';
import Time from './time';
import Other from './other';
import { Button } from 'antd';
import { Input } from 'antd';
import { Form } from 'antd';
import { Collapse } from 'antd';




function onChange(e, value) {
    //
    console.log(`checked = `, e);
}
// 将引入类变成常量，用来继承
const Component = React.Component;

function callback(key) {
    console.log(key);
  }
//注意这个类，必须继承自Component
class WorkOverView extends Component {
    

    constructor(props) {
        super(props);
        this.state = { a: 'coconut' };
        this.state = { b: 'coconut' };
        this.state = { c: 'coconut' };
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.handleChangeC = this.handleChangeC.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeA(event) {
        this.setState({ a: event.target.value });
    }
    handleChangeB(event) {
        this.setState({ b: event.target.value });
    }
    handleChangeC(event) {
        this.setState({ c: event.target.value });
    }

    handleSubmit(event) {
        alert('当前提交表单为:{专业:' + this.state.a + ',  优先级:' + this.state.b +
            '   ,设备分级:' + this.state.c + '}');
        event.preventDefault();
    }
    render() {
        const { Panel } = Collapse;
        return (
            <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="工作概述" key="1">

            <Form onSubmit={this.handleSubmit}>
                <fieldset >
                    <legend>工作概述</legend>
                    <div className='from-wrapper'>
                        <div className="from-in">
                            <div className="from-inner">
                                <div className="from-flex">
                                    工单任务编号
                                    <Input size="large"  value="T185513 " className="from-item" />
                                    {/* <Input type="text" value="T190929902" className="from-item"></Input> */}
                                </div>
                                <div className="from-flex">
                                    生产单元:
                                    <Input type="text" value="霞浦0#项目" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    系统号:
                                    <Input type="text" value="ABP" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    专业:
                                    <select className="from-item" value={this.state.a} onChange={this.handleChangeA}>
                                        <option value="工艺">工艺</option>
                                        <option value="电气">电气</option>
                                        <option value="机械">机械</option>
                                        <option value="其他">其他</option>
                                    </select>
                                </div>

                                <div className="from-flex">
                                    运行隔离:
                                    <Checkbox onChange={onChange}>日常</Checkbox>
                                    <Checkbox onChange={onChange}>大修</Checkbox>
                                </div>
                            </div>
                            <div className="from-inner">
                                <div className="from-flex">
                                    任务状态:
                                    <Input type="text" value="工作包完成准备" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    电厂代码
                                    <Input type="text" value="XNPC" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    设备编码:
                                    <Input type="text" value="0ABPWX001" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    优先级:
                                    <select className="from-item" value={this.state.b} onChange={this.handleChangeB}>
                                        <option value="立即响应y">立即响应</option>
                                        <option value="24小时响应">24小时响应</option>
                                        <option value="72小时响应">72小时响应</option>
                                        <option value="一周内响应">一周内响应</option>
                                    </select>
                                </div>
                                <div className="from-flex">
                                    大修代码:
                                    <Input type="text" value="101" className="from-item"></Input>
                                </div>
                            </div>
                            <div className="from-inner">
                                <div className="from-flex">
                                    工单类型:
                                    <Input type="text" value="标准工单" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    机组号:
                                    <Input type="text" value="0" className="from-item" />
                                </div>
                                <div className="from-flex">
                                    设备/系统名称:
                                    <Input type="text" value="0 ABP 启动给水泵入口放气阀" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    设备分级:
                                    <select className="from-item" value={this.state.c} onChange={this.handleChangeC}>
                                        <option value="A关键">A关键</option>
                                        <option value="B关键">B关键</option>
                                        <option value="C关键">C关键</option>
                                        <option value="D关键">D关键</option>
                                    </select>
                                </div>
                                <div className="from-flex">
                                    变更项目编号:
                                    <Input type="text" className="from-item"></Input>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="from-flex">
                                工作任务标题:
                                <Input type="text" value=" 测试工作申请【PC-20190918】" className="from-items"></Input>
                            </div>
                            <div className="from-flexs">
                                <div className="from-items">
                                    <div className="from-flex">
                                        等效工单编号:
                                        <Input type="text" className="from-item"></Input>
                                    </div>
                                </div>
                                <div className="from-items">
                                    <div className="from-flex">
                                        取消/等效类型:
                                        <Input type="text" className="from-item"></Input>
                                    </div>
                                </div>
                                <div className="from-items">
                                    <div className="from-flex">
                                        操作人:
                                        <Input type="text" className="from-item"></Input>
                                    </div>
                                </div>
                            </div>
                            <div className="from-items">
                                <div className="from-flex">
                                    时间:
                                    <Input type="text" value="" className="from-items"></Input>
                                </div>
                            </div>
                            <div className="from-flex">
                                原因:
                                <textarea name="" rows="4" className="from-items"></textarea>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset >
                    <legend>计划</legend>
                    <div>
                        <Time />
                    </div>
                </fieldset>

                <fieldset >
                    <legend>其他</legend>
                    <div>
                        <Other />
                    </div>

                   
                </fieldset>
                {/* <Input id="bottom" type="submit" value="提交" /> */}
                <div>
                    <Button id="save_but" type="primary">保存</Button>

                    <Button id="submit_but" type="primary">提交</Button>
                </div>
               

            </Form>
            </Panel>
            </Collapse>

        );
    }
}

//抛出类,这是es6 语法 必须这么写
export default WorkOverView;
//jsx 简单理解 ，遇到 <> 就解析为html，遇到{}就解析为js

