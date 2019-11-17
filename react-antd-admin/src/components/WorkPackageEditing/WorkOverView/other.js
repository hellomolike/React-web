import React from 'react';
import './index.less';

//加入antd组件库
import {
    Checkbox
} from 'antd';

function onChange(e, value) {
    //
    console.log(`checked = `, e);
}


//选择框
const plainOptions = ['是', '否'];
const options = [
    { label: '是', value: '是' },
    { label: '否', value: '否' },

];


function Other(prpos) {
    return (
        <div className='from-wrapper'>
            <div className="from-in">
                <div className="from-inner">
                    <div>
                        <span>运行隔离:</span>
                        <Checkbox.Group options={plainOptions} defaultValue={['是']} onChange={onChange} />
                    </div>
                    <div>
                        <span>质量计划:</span>
                        <Checkbox.Group options={options} defaultValue={['否']} onChange={onChange} />
                    </div>
                    <div>
                        <span>维修后试验:</span>
                        <Checkbox.Group options={options} defaultValue={['否']} onChange={onChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Other