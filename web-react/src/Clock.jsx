import React from "react"
export default class Clock extends React.Component {
    constructor(props){
       super(props);
       this.state = {date: new Date()};
    }
    //挂载定时器，一秒钟渲染一次
    componentDidMount(){
        this.timerID=setInterval(() => this.tick(),1000);
    }

    //卸载定时器
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    //定时刷新函数
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }