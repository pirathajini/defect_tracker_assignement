import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import '../App.css';
import axios from 'axios';

class Projectedit extends Component {
  state = {
    projectName: '',
    projectDescription: ''
  }
  componentDidMount() {
    axios.get(
      "http://localhost:8080/test/api/v1/geProjectById/" + this.props.match.params.id
    )
      .then(result => {
        console.log(result);
        this.setState({

          projectName: result.data.projectName,
          projectDescription: result.data.projectDescription

        });
      });
  }
  handleChangepname1 = (event) => {
    this.setState({
      projectName: event.target.value
    });
  }

  handleChangepdes1 = (event) => {
    this.setState({
      projectDescription: event.target.value
    });
  }



  getToList = () => {
    this.props.history.push("/projectlist")
  }

  onSubmithanlde = (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/test/api/v1/updateproject/"
    axios.put(url + this.props.match.params.id, { projectName: this.state.projectName, projectDescription: this.state.projectDescription })
  }


  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="maindiv">
          <div className="form-style-5">
            <form onSubmit={this.onSubmithanlde}>
              <fieldset>
                <legend><span className="number">*</span> Project Info</legend>
                <input type="text" name="pojectname" placeholder="Project Name*" value={this.state.projectName} onChange={this.handleChangepname1} />

                <textarea name="projectdescription" placeholder="Project Discription" value={this.state.projectDescription} onChange={this.handleChangepdes1} />
                {/* <label for="job">Interests:</label>
<select id="job" name="field4">
<optgroup label="Indoors">
  <option value="fishkeeping">Fishkeeping</option>
  <option value="reading">Reading</option>
  <option value="boxing">Boxing</option>
  <option value="debate">Debate</option>
  <option value="gaming">Gaming</option>
  <option value="snooker">Snooker</option>
  <option value="other_indoor">Other</option>
</optgroup>
<optgroup label="Outdoors">
  <option value="football">Football</option>
  <option value="swimming">Swimming</option>
  <option value="fishing">Fishing</option>
  <option value="climbing">Climbing</option>
  <option value="cycling">Cycling</option>
  <option value="other_outdoor">Other</option>
</optgroup>
</select>       */}
              </fieldset>
              <fieldset>

              </fieldset>

              <div className="tb"><table>
                <tr>
                  <th>
                    <a href="/projectlist"><th> <input id="btn-back" type="button" value="Edit"/></th></a>
                  </th>
                  <th>
                    <a href="/projectlist"><th> <input id="btn-back" type="button" value="Back" onClick={this.getToList} /></th></a>
                  </th>

                </tr>
                <tr>

                </tr>
              </table>




              </div>

            </form>
          </div>






        </div>
      </div>
    );
  }
}

export default Projectedit;