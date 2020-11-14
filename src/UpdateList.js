import React from 'react';

function UpdateList(props) {
    const modalIdentifier = 'update'+props.elementId
    const dataTarget = '#'+modalIdentifier
    return (
      <React.Fragment>
        
    <button type="button" className="btn btn-warning" data-toggle="modal" data-target={dataTarget}
    onClick={(e)=>props.getList(e,props.elementId)}>Actualizar Tarjeta</button>
        <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id="exampleModalLabel">Actualizar Tarjeta</span>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
                        <div className="modal-body">
                            <input type="text"
                                placeholder="Nombre Titular"
                                name="nombreTitular"
                                value={props.singledata.nombreTitular}
                                onChange={props.handleChange}>

                            </input><br></br>

                            <input type="text"
                                placeholder="Banco"
                                name="nombreEntidad"
                                value={props.singledata.nombreEntidad}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="Numero Tarjeta"
                                name="numeroTarjeta"
                                value={props.singledata.numeroTarjeta}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="Marca"
                                name="marca"
                                value={props.singledata.marca}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="Fecha Caducidad"
                                name="fechaCaducidad"
                                value={props.singledata.fechaCaducidad}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="CVV"
                                name="numeroTarjeta"
                                value={props.singledata.cvv}
                                onChange={props.handleChange}>
                            </input><br></br>


                        </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button"
                 className="btn btn-primary"
                 data-dismiss="modal"
                 onClick={(event)=>props.updateList(event,props.elementId)}>Actualizar </button>
              </div>
            </div>
          </div>
        </div>
  
        </React.Fragment>
    )
    
  }

  export default UpdateList;