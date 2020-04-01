import React from "react";
import axios from "axios";
// import styled from "styled-components";

// import API from "./utils/API";

// const Container = styled.container`
//   background-color: teal;
// `;

class Directory extends React.Component {
  state = {
    search: "",
    order: "DESC",
    // imageUrl: "",
    // name: "",
    // phone: "",
    // email: "",
    // dob: ""
    results: [],
    filtered: [],
    col: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      filtered: this.state.results.filter(emp => {
        var vals = Object.values(emp) // [Object object]
          .toString()
          .toLowerCase();

        return vals.includes(value.toLowerCase());
      })
    });
  };

  // handleFilter = () => {

  // }

  async componentDidMount() {
    const url = `https://randomuser.me/api/?results=20&nat=us?inc=Abby`;
    let response = await axios.get(url);
    console.log(response.data);
    // let search = response.data.results[0];
    // this.setState({
    //   imageUrl: search.picture.thumbnail,
    //   name: search.name.first + " " + search.name.last,
    //   phone: search.phone,
    //   email: search.email,
    //   dob: search.dob.date
    // });
    const mappedRes = response.data.results.map(res => ({
      thumbnail: res.picture.thumbnail,
      lastName: res.name.last,
      firstName: res.name.first,
      email: res.email,
      phone: res.phone,
      dob: res.dob.date
    }));
    this.setState({ ...this.state, results: mappedRes, filtered: mappedRes });
  }

  sortBy = col => {
    this.setState({
      filtered: this.state.filtered.sort((a, b) => {
        if (this.state.order === "DESC") {
          return a[col] > b[col] ? 1 : -1;
        } else {
          return a[col] < b[col] ? 1 : -1;
        }
      }),
      order: this.state.order === "DESC" ? "ASC" : "DESC"
    });
  };

  render() {
    const { filtered } = this.state;
    return (
      <>
        <div className="container">
          <div className="row my-5 justify-content-center">
            <input
              type="text"
              name="search"
              onChange={this.handleChange}
              value={this.state.search}
            />
          </div>

          <div className="row">
            <div className="col">
              <button onClick={() => this.sortBy("firstName")}>
                First Name
              </button>
            </div>
            <div className="col">
              <button onClick={() => this.sortBy("lastName")}>Last Name</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {filtered.map((profile, i) => {
                return (
                  <div className="row" key={i + "-employee"}>
                    <div className="col my-1">
                      <img
                        src={profile.thumbnail}
                        alt={profile.lastName + "-thumbnail"}
                      />
                    </div>
                    <div className="col">
                      {profile.firstName + " " + profile.lastName}
                    </div>
                    <div className="col">{profile.email}</div>
                    <div className="col">{profile.phone}</div>
                    <div className="col">{profile.dob}</div>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        </div>
      </>
    );
  }
}

export default Directory;
