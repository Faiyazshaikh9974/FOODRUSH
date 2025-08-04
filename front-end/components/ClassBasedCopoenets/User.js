import React from "react";

class UserClass extends React.Component {
  constructor(prosp) {
    super(prosp);

    this.state = {
      username: "Dummy User",
      bio: "Nothing",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Faiyazshaikh9974");
    let json = await data.json();
    this.setState(json);
  }
  render() {
    return (
      <div className="bg-gray-300">
        <h1>About Our Restorant</h1>
        <div className="user-card">
          <h2>
            This Restorant Founded in 1999, and Located At Ahmedabad Gujarat
          </h2>
          <h2>Owner Name: {this.state.name}</h2>
          <img src={this.state.avatar_url} alt="User Avatar" />
          <h3>Bio: {this.state.bio}</h3>

          <h2>Location: {this.state.location}</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
