import React, { useState, useEffect } from "react";
import API from "../utils/API";
import DirectoryRow from "../components/DirectoryRow";

const Directory = () => {
  const [state, setState] = useState({
    headers: [
      {
        name: "First Name",
        val: "firstName"
      },
      {
        name: "Last Name",
        val: "lastName"
      },
      {
        name: "Email",
        val: "email"
      },
      {
        name: "Phone",
        val: "phone"
      },
      {
        name: "DoB",
        val: "dob"
      }
    ],
    search: "",
    order: "DESC",
    results: [],
    filtered: [],
    col: ""
  });

  const handleChange = e => {
    setState({
      ...state,
      search: e.target.value,
      filtered: state.results.filter(emp => {
        var vals = Object.values(emp) // [Object object]
          .toString()
          .toLowerCase();

        return vals.includes(e.target.value.toLowerCase());
      })
    });
  };

  useEffect(() => {
    const callAPI = async () => {
      let response = await API.getEmpProfiles();
      const mappedRes = response.data.results.map(res => ({
        thumbnail: res.picture.thumbnail,
        lastName: res.name.last,
        firstName: res.name.first,
        email: res.email,
        phone: res.phone,
        dob: res.dob.date
      }));
      setState(state => ({
        ...state,
        results: mappedRes,
        filtered: mappedRes
      }));
    };
    callAPI();
  }, []);

  const handleSort = col => {
    setState({
      ...state,
      filtered: state.filtered.sort((a, b) => {
        if (state.order === "DESC") {
          return a[col] > b[col] ? 1 : -1;
        } else {
          return a[col] < b[col] ? 1 : -1;
        }
      }),
      order: state.order === "DESC" ? "ASC" : "DESC"
    });
  };

  return (
    <>
      <div className="container">
        <div className="row my-5 justify-content-center">
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={state.search}
          />
        </div>

        <div className="row">
          <div className="col"></div>
          {state.headers.map((header, i) => (
            <div className="col" key={i + "-header"}>
              <button onClick={() => handleSort(header.val)}>
                {header.name}
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            {state.filtered.map((profile, i) => (
              <DirectoryRow key={i + "-employee"} profile={profile} />
            ))}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Directory;
