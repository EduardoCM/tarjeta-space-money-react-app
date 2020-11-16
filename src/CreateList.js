import React from "react";

function CreateList(props) {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
      >
        Crear Nueva Tarjeta
      </button>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                Nueva Tarjeta
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Nombre Titular"
                name="nombreTitular"
                value={props.singledata.nombreTitular}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Banco"
                name="nombreEntidad"
                value={props.singledata.nombreEntidad}
                onChange={props.handleChange}
              />
                <br />
              <input
                type="text"
                placeholder="Numero Tarjeta"
                name="numeroTarjeta"
                value={props.singledata.numeroTarjeta}
                onChange={props.handleChange}
              />
                <br />
              <input
                type="text"
                placeholder="VISA - MARTERCARD"
                name="marca"
                value={props.singledata.marca}
                onChange={props.handleChange}
              />
                <br />
              <input
                type="text"
                placeholder="Fecha Cauducidad"
                name="fechaCauducidad"
                value={props.singledata.fechaCauducidad}
                onChange={props.handleChange}
              />
                <br />
              <input
                type="text"
                placeholder="CVV"
                name="cvv"
                value={props.singledata.cvv}
                onChange={props.handleChange}
              />
                <br />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={props.createList}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateList;
