import React from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        nombre: "",
        precio: ""
      }
    };
    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3000/articulos")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  }

  handleChange(event) {
    var nombre = this.state.singledata.nombre;
    var precio = this.state.singledata.precio;
    if (event.target.name === "nombre") nombre = event.target.value;
    else precio = event.target.value;

    this.setState({
      singledata: {
        nombre: nombre,
        precio: precio
      }
    });
  }

  createList() {
    fetch("http://localhost:3000/articulos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      this.setState({
        singledata: {
          nombre: "",
          precio: ""
        }
      })
    );
  }

  getList(event, id) {
    this.setState(
      {
        singledata: {
          nombre: "Loading...",
          precio: "Loading..."
        }
      },
      () => {
        fetch("http://localhost:3000/articulos/" + id)
          .then(res => res.json())
          .then(result => {
            this.setState({
              singledata: {
                nombre: result.nombre,
                precio: result.precio ? result.precio : ""
              }
            });
          });
      }
    );
  }

  updateList(event, id) {
    fetch("http://localhost:3000/articulos/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            nombre: "",
            precio: ""
          }
        });
        this.getLists();
      });
  }

  deleteList(event, id) {
    fetch("http://localhost:3000/articulos/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            nombre: "",
            precio: ""
          }
        });
        this.getLists();
      });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <div className="container">
        <span className="title-bar">
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.getLists}
          >
            Obtener Articulos
          </button>
          <CreateList
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {listTable}
      </div>
    );
  }
}

export default App;
