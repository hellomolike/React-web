import React from "react";
import Home from './Home';
import MyNav from './MyNav';
import StateComponent from "./StateComponent";
class App extends React.Component{
    render(){
        const nav1=["首页","视频","学习"];
        const nav2=["web","java","node"];
        return(
            <div>
               {/* { <h1>学习react心态要好。</h1>
                <Home />
                <MyNav nav={ nav1 } title="路径导航"/>
                <MyNav nav={ nav2 } title="学习导航"/> */}
               <StateComponent />
            </div>
        )
           
        
    }
}

export default App;