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
        cvv: "",
        fechaCauducidad: "",
        id: "",
        marca: "",
        nombreEntidad: "",
        nombreTitular: "",
        numeroTarjeta: ""
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
      fetch("http://localhost:8089/space-money-tarjetasss/webapi/tarjetas")
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

    console.log("ENtro a handleChange")
     var cvv = this.state.singledata.cvv;
     var fechaCauducidad = this.state.singledata.fechaCauducidad;
     var id = this.state.singledata.id;
     var marca = this.state.singledata.marca;
     var nombreEntidad = this.state.singledata.nombreEntidad;
     var nombreTitular = this.state.singledata.nombreTitular;
     var numeroTarjeta = this.state.singledata.numeroTarjeta;


   // if (event.target.name === "nombre") nombre = event.target.value;
  //  else precio = event.target.value;

  if(event.target.name === "nombreTitular"){
    nombreTitular = event.target.value;
  } else if (event.target.name === "nombreEntidad"){
    nombreEntidad = event.target.value;
  } else if (event.target.name === "numeroTarjeta"){
    numeroTarjeta = event.target.value;
  } else if (event.target.name === "marca"){
    marca = event.target.value;
  } else if (event.target.name === "fechaCauducidad"){
    fechaCauducidad = event.target.value;
  } else if (event.target.name === "cvv"){
    cvv = event.target.value;
  }



    this.setState({
      singledata: {
        cvv: cvv,
        fechaCauducidad: fechaCauducidad,
        id: id,
        marca: marca,
        nombreEntidad: nombreEntidad,
        nombreTitular: nombreTitular,
        numeroTarjeta: numeroTarjeta
      }
    });
  }

  createList() {
    fetch("http://localhost:8089/space-money-tarjetasss/webapi/tarjetas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      this.setState({
        singledata: {
          cvv: "",
        fechaCauducidad: "",
        id: "",
        marca: "",
        nombreEntidad: "",
        nombreTitular: "",
        numeroTarjeta: ""
        }
      })
    );
  }

  getList(event, numeroTarjeta) {
    this.setState(
      {
        singledata: {
          nombre: "Loading...",
          precio: "Loading..."
        }
      },
      () => {
        fetch("http://localhost:8089/space-money-tarjetasss/webapi/tarjetas/" + numeroTarjeta)
          .then(res => res.json())
          .then(result => {
            this.setState({
              singledata: {
                cvv: result.cvv,
                fechaCauducidad: result.fechaCauducidad,
                id: result.id,
                marca: result.marca,
                nombreEntidad: result.nombreEntidad,
                nombreTitular: result.nombreTitular,
                numeroTarjeta: result.numeroTarjeta
              }
            });
          });
      }
    );
  }

  updateList(event, numeroTarjeta) {
    fetch("http://localhost:8089/space-money-tarjetasss/webapi/tarjetas/" + numeroTarjeta, {
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
            cvv: "",
        fechaCauducidad: "",
        id: "",
        marca: "",
        nombreEntidad: "",
        nombreTitular: "",
        numeroTarjeta: ""
          }
        });
        this.getLists();
      });
  }

  deleteList(event, numeroTarjeta) {
    fetch("http://localhost:8089/space-money-tarjetasss/webapi/tarjetas/" + numeroTarjeta, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            cvv: "",
        fechaCauducidad: "",
        id: "",
        marca: "",
        nombreEntidad: "",
        nombreTitular: "",
        numeroTarjeta: ""
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
            className="btn btn-primary"
            onClick={this.getLists}
          >
            Mostrar Tarjetas
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
