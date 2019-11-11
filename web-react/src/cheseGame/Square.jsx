import React from "react"

//这个组件的作用就是渲染props中的值或者div，为每一个value添加button按钮
export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }