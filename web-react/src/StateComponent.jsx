import React from "react"
export default class StateComponent extends React.Component{
     /**
         * 组件中的状态 state
         * 以前我们操作页面的 元素的变化 都是修改dom 操作dom
         * 但是 有了react 我们不在推荐操作dom 页面元素的改变使用state进行处理
         */
    
    constructor(props){
        super(props);
       
        this.state={
            count:10
            ,flag:true        
        
        }
    }
    
    increment(){
        this.setState({
            count:this.state.count+=1
        })
    }

    decrement(){
        this.setState({
            count:this.state.count-=1
        })
    }

    clickHandler = () =>{
        console.log(this);
    }
    
    render(){
        let  showView=this.state.flag ? "真悟空":"假悟空"
        return(

        <div>
            <h3>组件的estate</h3>
            <p>{ this.state.count }</p>
            <button onClick={ this.increment.bind(this) }>增加</button>
            <button onClick={ this.decrement.bind(this) }>减少</button>
            <button onClick={ this.clickHandler }>关于this</button>
            <button onClick={this.clickflag}>判断真假悟空</button>
            <p>{showView}</p>
        </div>

        )
    }
}