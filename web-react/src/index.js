
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'whatwg-fetch';
/* const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <div>
    <DatePicker onChange={onChange} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker onChange={onChange} />
    <br />
    <WeekPicker onChange={onChange} placeholder="Select week" />
  </div>,
  document.getElementById('container'),
); */


export default class RequestView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    fetch("http://192.168.43.53:8888/test",{
		  method:"post",
		  mode:"cors",
		   headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin":"*",
		    },
		  }).then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({users: data})
      })
      .catch(e => console.log('错误:', e))
  }

  render() {
    return (
      <div>
		<input type="button" value="点击 http-get 方式获取数据" onClickCapture={this.handleClick} />
        
        <ul>
          {this.state.users &&
            this.state.users.map((item, index) => (
              <li key={index.toString()}>{item.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<RequestView />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA