import React, { Component } from "react";
//import API from "../utils/API";
import SearchForm from "../components/SearchForm";
const $ = window.$;
class Main extends Component {
  state = {
    phone: "",
    habit: "",
    name: ""
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    // this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    // const newState = { ...this.state };

    // if (btnType === "pick") {
    //   // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
    //   newState.match = 1 === Math.floor(Math.random() * 5) + 1;

    //   // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
    //   newState.matchCount = newState.match
    //     ? newState.matchCount + 1
    //     : newState.matchCount;
    // } else {
    //   // If we thumbs down'ed the dog, we haven't matched with it
    //   newState.match = false;
    // }
    // // Replace our component's state with newState, load the next dog image
    // this.setState(newState);
    // this.loadNextDog();
  };

  // loadNextDog = () => {
  // API.getRandomDog()
  //   .then(res =>
  //     this.setState({
  //       image: res.data.message
  //     })
  //   )
  //   .catch(err => console.log(err));
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    var habit = document.getElementById("habit").value;
    var phone = document.getElementById("phone").value;
    var name = document.getElementById("name").value;
    
    this.setState({
      habit: habit,
      phone: phone,
      name: name
    })
    //console.log(name.value, habit.value, phone.value);
    $('#exampleModalLong').modal({
      keyboard: true
    })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Establish a new habit today & forever</h1>
        <h3 className="text-center">
          Begin by filling out the information below:
        </h3>
        <SearchForm handleFormSubmit={this.handleFormSubmit} />

        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.phone}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Main;
