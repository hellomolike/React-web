import React from 'react';
import './index.less';

import {
    DatePicker,
    InputNumber,
    Input
} from 'antd';
import moment from 'moment';


//时间
const dateFormat = 'YYYY/MM/DD';

function onChange(e, value) {
    console.log('changed', value);
}

function Time(prpos) {
    return (
        <div className='from-wrapper'>
            <div className="from-in">
                <div className="from-inner">
                    <div className="from-flex">
                        <span>计划开工时间:</span>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                    <div className="from-flex">
                        <span>建议开工时间:</span>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                    <div className="from-flex">
                        <span>PM最早开工时间:</span>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                </div>
                <div className="from-inner">
                    <div className="from-flex">
                        <span>计划完工时间</span>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                    <div className="from-flex">
                        <span>建议完工时间</span>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                    <div className="from-flex">
                        <span>PM最晚开工时间</span>
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                </div>
                <div className="from-inner">
                    <div className="from-flex">
                        <span>工时</span>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} className="from-item" />
                    </div>
                    <div className="from-flex">
                        <span>计划完工延期时间</span>
                        <Input placeholder="Basic usage" className="from-item" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Time