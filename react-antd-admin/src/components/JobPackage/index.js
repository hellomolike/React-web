import React from 'react';
import { Checkbox } from 'antd';
import './index.less';
import Time from './time';
import Other from './other';
import { Button } from 'antd';
import { Input } from 'antd';




function onChange(e, value) {
    //
    console.log(`checked = `, e);
}
// 将引入类变成常量，用来继承
const Component = React.Component

//注意这个类，必须继承自Component
class JobPackage extends Component {

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
        return (

            <form onSubmit={this.handleSubmit}>
                <fieldset >
                    <legend>工作概述</legend>
                    <div className='from-wrapper'>
                        <div className="from-in">
                            <div className="from-inner">
                                <div className="from-flex">
                                    <span>工单任务编号:</span>
                                    <Input size="large" placeholder="large size"  value="T185513 " className="from-item"/>
                                    {/* <input type="text" value="T190929902" className="from-item"></input> */}
                                </div>
                                <div className="from-flex">
                                    <span>生产单元:</span>
                                    <Input type="text" value="霞浦0#项目" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    <span>系统号:</span>
                                    <Input type="text" value="ABP" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    <span>专业:</span>
                                    <select className="from-item" value={this.state.a} onChange={this.handleChangeA}>
                                        <option value="工艺">工艺</option>
                                        <option value="电气">电气</option>
                                        <option value="机械">机械</option>
                                        <option value="其他">其他</option>
                                    </select>
                                </div>

                                <div className="from-flex">
                                    <span>运行隔离:</span>
                                    <Checkbox onChange={onChange}>日常</Checkbox>
                                    <Checkbox onChange={onChange}>大修</Checkbox>
                                </div>
                            </div>
                            <div className="from-inner">
                                <div className="from-flex">
                                    <span>任务状态:</span>
                                    <Input type="text" value="工作包完成准备" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    <span>电厂代码:</span>
                                    <Input type="text" value="XNPC" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    <span>设备编码:</span>
                                    <Input type="text" value="0ABPWX001" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    <span>优先级:</span>
                                    <select className="from-item" value={this.state.b} onChange={this.handleChangeB}>
                                        <option value="立即响应y">立即响应</option>
                                        <option value="24小时响应">24小时响应</option>
                                        <option value="72小时响应">72小时响应</option>
                                        <option value="一周内响应">一周内响应</option>
                                    </select>
                                </div>
                                <div className="from-flex">
                                    <span>大修代码:</span>
                                    <Input type="text" value="101" className="from-item"></Input>
                                </div>

                            </div>
                            <div className="from-inner">
                                <div className="from-flex">
                                    <span>工单类型:</span>
                                    <Input type="text" value="标准工单" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    <span> 机组号:</span>
                                    <Input type="text" value="0" className="from-item" />
                                </div>
                                <div className="from-flex">
                                    <span>设备/系统名称:</span>
                                    <Input type="text" value="0 ABP 启动给水泵入口放气阀" className="from-item"></Input>
                                </div>
                                <div className="from-flex">
                                    <span>设备分级:</span>
                                    <select className="from-item" value={this.state.c} onChange={this.handleChangeC}>
                                        <option value="A关键">A关键</option>
                                        <option value="B关键">B关键</option>
                                        <option value="C关键">C关键</option>
                                        <option value="D关键">D关键</option>
                                    </select>
                                </div>
                                <div className="from-flex">
                                    <span>变更项目编号:</span>
                                    <Input type="text" className="from-item"></Input>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="from-flex">
                                <span>工作任务标题:</span>
                                <input type="text" value="测试工作申请【PC-20190918】" className="from-items"></input>
                            </div>
                            <div className="from-flexs">
                                <div className="from-items">
                                    <div className="from-flex">
                                        <span>等效工单编号:</span>
                                        <input type="text" className="from-item"></input>
                                    </div>
                                </div>
                                <div className="from-items">
                                    <div className="from-flex">
                                        <span>取消/等效类型:</span>
                                        <input type="text" className="from-item"></input>
                                    </div>
                                </div>
                                <div className="from-items">
                                    <div className="from-flex">
                                        <span>操作人:</span>
                                        <input type="text" className="from-item"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="from-items">
                                <div className="from-flex">
                                    <span>时间:</span>
                                    <input type="text" value="" className="from-items"></input>
                                </div>
                            </div>
                            <div className="from-flex">
                                <span>原因:</span>
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
                {/* <input id="bottom" type="submit" value="提交" /> */}
                <div>
                <Button  id="save_but" type="primary">保存</Button>   
                
                <Button  id="submit_but" type="primary">提交</Button>
                </div>
                
            </form>

        );
    }
}

//抛出类,这是es6 语法 必须这么写
export default JobPackage;
//jsx 简单理解 ，遇到 <> 就解析为html，遇到{}就解析为js

