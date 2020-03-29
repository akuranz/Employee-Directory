import React from "react";
import axios from "axios";
// import API from "./utils/API";

class Directory extends React.Component {
  state = {
    imageUrl: "",
    name: "",
    phone: "",
    email: "",
    dob: ""
  };

  async componentDidMount() {
    const url = `https://randomuser.me/api/?results=20&nat=us`;
    let response = await axios.get(url);
    console.log(response.data);
    let search = response.data.results[0];
    this.setState({
      imageUrl: search.picture.thumbnail,
      name: search.name.first + " " + search.name.last,
      phone: search.phone,
      email: search.email,
      dob: search.dob.date
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={this.state.imageUrl} />
            </div>
            <div className="col">
              <h3>{this.state.name}</h3>
            </div>
            <div className="col">
              <h3>{this.state.phone}</h3>
            </div>
            <div className="col">
              <h3>{this.state.email}</h3>
            </div>
            <div className="col">
              <h3>{this.state.dob}</h3>
            </div>

            <hr />
          </div>
        </div>
      </>
    );
  }
}

// function Button({ onClick, children }) {
//   return (
//     <button className="btn btn-primary" onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function ImgCard({ src }) {
//   return (
//     <div className="col-3 thumbnail">
//       <img src={src} className="img" style={{ width: "100%" }} />
//     </div>
//   );
// }

export default Directory;
