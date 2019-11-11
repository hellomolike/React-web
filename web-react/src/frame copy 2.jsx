import React from "react";
import './frame.css'

class IndexFrame3 extends React.Component{
    constructor(props) {
	    super(props);
	    this.state = {One: 'coconut'};
		this.state = {Two: 'coconut'};
		this.state = {Three: 'coconut'};
		this.state = {Four: 'coconut'};
	    this.handleChange = this.handleChange.bind(this);
		this.handleChangeTwo = this.handleChangeTwo.bind(this);
		this.handleChangeThree = this.handleChangeThree.bind(this);
		this.handleChangeFour = this.handleChangeFour.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }
	  handleChange(event) {
	    this.setState({One: event.target.value});
	  }
	   
	  handleChangeTwo(event) {
	    this.setState({Two: event.target.value});
	  } 
	  
	  handleChangeThree(event) {
	    this.setState({Three: event.target.value});
	  } 
	  
	  handleChangeFour(event) {
	    this.setState({Four: event.target.value});
	  } 
	  
	  handleSubmit(event) {
	    alert('当前提交表单为:{专业:' + this.state.One+',  优先级:'+this.state.Two+
		'   ,厂区房间:'+this.state.Three+'   ,维修分级:'+this.state.Four+'}');
	    event.preventDefault();
	  }
   
    render(){
        /* 定义input多选框输入框大众样式 */
		let inputStyle = {
			width:'250px',
			height: '30px',
			margin : '10px',
			
		} 
		
		/* 定义input输入框样式大众样式 */
		let inputStyleTwo = {
			width:'250px',
			height: '25px',
			background: 'grey',
			margin : '10px',
		} 
        return (
            
           
          <form onSubmit={this.handleSubmit}>
             
          <div class="blueRadius"></div>
          <div class="blueRadius"></div>
          <div class="text">
             <button id="button">计划</button>
          </div>
          <div id="TaskNumber">
             <label >
                 工单任务编号:<input style={inputStyleTwo} value="T190929389" />
             </label>
          </div>
    
         <div id="WorkType">
           <label >
              工单类型:<input style={inputStyleTwo} value="实验工单" />
           </label> 
         
         </div>

         <div id="PlantCode">
           <label  >
             电厂代码:<input style={inputStyleTwo} value="XNPC" />
           </label>
         </div>
     
         <div id="SystemNo">
           <label  >
             系统号:<input style={inputStyleTwo} value="ABP 启动给水放气闸" />
           </label> 
         </div>
     
         <div id="System">
           <label  >
            系统/设备名称:<input style={inputStyleTwo} value="O ABP 启动积水" />
           </label>
         </div>
     
         <div id="Priority">
            <label >
             优先级:<select style={inputStyle} value={this.state.Two} onChange={this.handleChangeTwo}>
                     <option value="立即响应">立即响应</option>
                     <option value="24小时响应">24小时响应</option>
                     <option value="72小时响应">72小时响应</option>
                     <option value="一周内响应">一周内响应</option>
                   </select>
            </label>
          </div>
     
          <div id="PlantRoom">
              <label  >
               厂区房间:<input style={inputStyle} value={this.state.Three} onChange={this.handleChangeThree}  placeholder="1" />
              </label> 
                   
          </div>
     
          <div id="WorkPackagePreparation">
                <label  >
                   任务状态: <input style={inputStyleTwo} value="工作包准备中" />
                </label>
          </div>
     
          <div id="ProductionElement">
                <label>
                   生产单元: <input style={inputStyleTwo} value="霞浦0#项目" />
                </label>
          </div>
     
          <div id="UnitNumber">
               <label  >
                  机组号: <input style={inputStyleTwo} value="0" />
               </label>
          </div>

          <div id="UnitNumber2">
               <label  >
                  设备编码: <input style={inputStyleTwo} value="0ABPWX001" />
               </label>
          </div>
     
          <div id="Maintain">
              <label >
                  维修: <select style={inputStyle} value={this.state.Four} onChange={this.handleChangeFour}>
                          <option value="">            </option>
                          <option value="M1 (关键维修)">M1 (关键维修)</option>
                          <option value="M2 (重要维修)">M2 (重要维修)</option>
                          <option value="M3 (一般维修)">M3 (一般维修)</option>
                          <option value="M4 (简单维修)">M4 (简单维修)</option>
                      </select>
              </label>
          </div>
     
          <div id="major">
               <label >
                  专业:<select style={inputStyle} value={this.state.One} onChange={this.handleChange}>
                        <option value="机械">机械</option>
                        <option value="电气">电气</option>
                        <option value="仪控">仪控</option>
                        <option value="工艺">工艺</option>
                      </select>
              </label>
          </div>
          <input id="bottom" type="submit" value="提交" />
     </form>
        );
    }
}
export default IndexFrame3;