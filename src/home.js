import React, { Component } from 'react';
import './home.css';
import Draggable, {DraggableCore} from 'react-draggable'; 

class Home extends Component{
    constructor(){
        super();
        this.state={
            size: 50,
            click: true,
            name:'',
            hide:'',
            btncolor: 'btn btn-danger ',
            btnsize:'',
            element:[],
        
            
        }
       // this.handelchange= this.handelchange.bind(this); 
        this.submit = this.submit.bind(this);
        this.save = this.save.bind(this);
        this.selectcolor = this.selectcolor.bind(this);
        //this.hide = this.hide.bind(this);
    }
    
    submit= (e) => {
        this.setState({
            click : true,
            logoclick : false,
            logoname: '',
            name : "active",
        })
        console.log(this.state.click);
        if(this.state.click == true){
            this.handelchange=(event) => {
                event.preventDefault();
                this.setState({
                    size: event.target.value,
                    
                });
              }
        }
        this.hide=(a) => {
            this.setState({
                hide: "hide",
                name:'',
            })
        }
        
    }
    selectcolor(e){
        e.preventDefault();
        this.setState({
            btncolor : e.target.value
        });
      
    }
    save = () => {
    this.setState({element :<div> <nav>
                
    
    
    <div >
    <div className="logo" className={this.state.hide} name="logo" >
        <img  src={require("./logo192.png")}  alt="logo" onClick={this.submit}  style={{ width: `${this.state.size}%` }} />
    </div>
    </div>
    
    
    <div className="nav_right" name="nav-right"  >
    
    <div className="nav_icon" >
        <i class="fa fa-facebook"></i>
        <i class="fa fa-google-plus"></i>
        <i class="fa fa-twitter"></i>
    </div>
    <div className="nav_content" contenteditable="true">
        <h4>jan doe<span> | </span> Sales Development Representative</h4>
        <h4>Email: jandoe@gmai.com</h4>
        <h4>Tel: 71837183718</h4>
    </div>
    
    </div>
    </nav><br/> </div>});
        localStorage.setItem('element', JSON.stringify(this.state.element) )
    }
    render(){
        return(
            <div>
             
             <div className="top ">
                 <lable className="top_cnt" style = {{color: "white"}}>Change Size</lable>
                <input className="top_cnt" type="range" id="ranger" min="1" max="100" value={this.state.size} onChange={this.handelchange} style={{width:"30%"}} />
                <button className="top_cnt btn btn-danger" onClick={this.hide}>Delete</button>
                <select onChange={this.selectcolor} >
                    <option value="btn btn-danger" selected>Select Button color</option>
                    <option value="btn btn-success">Green</option>
                    <option value="btn btn-info">Blue</option>
                    <option value="btn btn-warning">Orange</option>
                    <option value="btn btn-default" >Default</option>
                </select>
                

                
            </div>   
            
            <div >
                <nav>
                
                    <Draggable>
                    
                    <div className={this.state.name}>
                    <div className="logo" className={this.state.hide} >
                        <img  src={require("./logo192.png")}  alt="logo" onClick={this.submit}  style={{ width: `${this.state.size}%` }} />
                    </div>
                    </div>
                    </Draggable>
                    
                    <div className="nav_right"  >
                    <Draggable>
                    <div className="nav_icon" >
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-google-plus"></i>
                        <i class="fa fa-twitter"></i>
                    </div>
                    </Draggable>
                    <Draggable>
                    <div className="nav_content" contenteditable="true">
                        <h4>jan doe<span> | </span> Sales Development Representative</h4>
                        <h4>Email: jandoe@gmai.com</h4>
                        <h4>Tel: 71837183718</h4>
                    </div>
                    </Draggable>
                    </div>
                </nav><br/> 
                <Draggable>
                <div className="container" contenteditable="true">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <h2>The Loreum ipsum dolar</h2>
                            <p>This webpage is page builder user can edit their own page,This webpage is page builder user can edit their own page</p>
                        </div>
                    </div>
                </div>
                </Draggable>
                <Draggable>
                <div classNAme="container">
                    <div className="row">
                        <div className="col-md-12">
                        <center><video width="800" controls>
                            <source src="mov_bbb.mp4" type="video/mp4"/>
                            <source src="mov_bbb.ogg" type="video/ogg"/>
                        </video></center>
                        </div>
                    </div>
                </div>
                </Draggable>
                
                <div className="container button" contenteditable="true">
                    <div className="row">
                    <Draggable>
                        <div className="col-md-12">
                            <center><button type="button" className={this.state.btncolor}>Button</button>
                            <button type="button" className={this.state.btncolor}  >Button</button>
                            <button type="button" className="btn btn-primary disabled" >Button</button></center>
                        </div>
                    </Draggable>
                    </div>
                    
                </div><br/><br/>
                
                <Draggable>
                <p className="txt_left" contenteditable="true">The Loreum ipsum dolar</p>
                </Draggable>
                <div className="last_box">
                <Draggable>
                    <div className="video_box">
                    <div classNAme="container">
                    <div className="row">
                        <div className="col-md-4">
                        <center><video controls>
                            <source src="mov_bbb.mp4" type="video/mp4"/>
                            <source src="mov_bbb.ogg" type="video/ogg"/>
                        </video></center>
                        </div>
                        <div className="col-md-4">
                        <center><video controls>
                            <source src="mov_bbb.mp4" type="video/mp4"/>
                            <source src="mov_bbb.ogg" type="video/ogg"/>
                        </video></center>
                        </div>
                        <div className="col-md-4">
                        <center><video controls>
                            <source src="mov_bbb.mp4" type="video/mp4"/>
                            <source src="mov_bbb.ogg" type="video/ogg"/>
                        </video></center>
                        </div>
                    </div>
                </div>
                    </div>
                    </Draggable>
                </div><br/><br/>
                
                <Draggable>
                <div className="footer" contenteditable="true">
                <p>This webpage is page builder user can edit their 
                    own page,This webpage is page builder user can edit their own page<br />
                    This webpage is page builder user can edit their 
                    own page,This webpage is page builder user can edit their own page</p>  
                </div>
                </Draggable>
            </div>
            <center><button className="btn btn-success" onClick={this.save}>Save & Next</button></center>
            <h1>Local storage Preview</h1>
            <div>{this.state.element}</div>   
            </div>
        );
    }
}

export default Home;