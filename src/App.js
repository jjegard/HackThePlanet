import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Popup from "./Popup/Popup";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFromDB: [],
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {
    const url = "http://hacktheplanet.azurewebsites.net/api/ReadDB";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(dataFromDB => {
        this.setState({ dataFromDB: dataFromDB });
      });
  }

  render() {
    const columns = [
      {
        Header: "Timestamp",
        accessor: "Timestamp",
        filterable: false
      },
      {
        Header: "Temperature",
        accessor: "Temperature"
      },
      {
        Header: "Image",
        Cell: btn => {
          return <button onClick={this.togglePopup.bind(this)}>Image</button>;
        },
        filterable: false,
        sortable: false
      }
    ];
    return (
      <div>
        {this.state.showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : (
          <ReactTable
            data={this.state.dataFromDB}
            columns={columns}
            defaultPageSize={25}
            filterable
          />
        )}
      </div>
    );
  }
}

export default App;
