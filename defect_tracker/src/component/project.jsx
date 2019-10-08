import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import '../App.css';
import axios from 'axios';

class Project extends Component {
  state = {
    data:[],
    projectName: '',
    projectDescription: '',
  }
  handleChange1 = (e) => {
    this.setState({ projectName: e.target.value });
  }
  handleChange2 = (e) => {
    //  console.log('sfdfd kjkj')
    this.setState({ projectDescription: e.target.value });
  }
  componentDidMount() {
    axios.get("http://localhost:8080/test/api/v1/project")
    .then(res=>
       {
           // console.log()
           if(res.status===200){
               console.log("data get");
           }
           this.setState({data:res.data});
       }
       )
}
  handleadd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/test/api/v1/project", this.state)
      .then(res => {
        console.log("result", res);
        window.location.reload(true);
      }
      )
  }
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="maindiv">
          <div className="form-style-5">
            <form onSubmit={this.handleadd}>
              <fieldset>
                <legend><span className="number">*</span> Project Info</legend>
                <input type="text" name="pojectname" placeholder="Project Name*" value={this.state.projectName} onChange={this.handleChange1} />

                <textarea name="projectdescription" placeholder="Project Discription" value={this.state.projectDescription} onChange={this.handleChange2} />

              </fieldset>


              <div className="tb"><table>
                <tr>
                  <th><input type="submit" value="Add" /></th>

                  <th>
                    <a href="/projectlist"><th > <input id="btn-cancel" type="button" value="Cancel" /></th></a>
                  </th>

                </tr>
                <tr>

                </tr>
              </table>




              </div>

            </form>
          </div>

          <div className="form-style-7">

            <table>
              <tr>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Project Discription</th>

              </tr>
                            
              {this.state.data.map(d => {
                return (<tr>
                  <td>{d.id}</td>
                  <td>{d.projectName}</td>
                  <td>{d.projectDescription}</td>

                </tr>)
              })}

            </table>


          </div>
        </div>
      </div>
    );
  }
}

export default Project;