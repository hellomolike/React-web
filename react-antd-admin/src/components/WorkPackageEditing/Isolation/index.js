import { Input } from 'antd';
import React from 'react';
const { Search } = Input;

export default class Isolation extends React.Component {
    render() {
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <br />
                <br />
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                <br />
                <br />
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)} />
            </div>
        );
    }

}