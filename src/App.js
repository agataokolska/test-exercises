import React from 'react';


class App extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(dataFromResponse =>
        this.setState({
          data: dataFromResponse.results
        })
      )
  }

  render() {
    return (
      this.state.data &&
      this.state.data.map(user => (
        <div key={user.login.uuid}>
          <img alt={"thumbnail"} src={user.picture.thumbnail} />
          <br /> {user.email}
          <hr />
        </div>
      ))
    );
  }

}

export default App;
