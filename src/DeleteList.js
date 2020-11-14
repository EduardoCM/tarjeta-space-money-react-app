import React from 'react';

function DeleteList(props) {
    const modalIdentifier = 'delete'+props.elementId
    const dataTarget = '#'+modalIdentifier
    return (
      <React.Fragment>
        
    <button type="button" className="btn btn-danger" data-toggle="modal" data-target={dataTarget}
    onClick={(e)=>props.getList(e,props.elementId)}>Eliminar Tarjeta</button>
        <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id="exampleModalLabel">Eliminar Tarjeta</span>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
                        <div className="modal-body">
                            <input type="text"
                                placeholder="Nombre Titular"
                                name="nombreTitular"
                                value={props.singledata.nombreTitular}
                                disabled={true}>

                            </input><br></br>

                            <input type="text"
                                placeholder="Numero Tarjeta"
                                name="numeroTarjeta"
                                value={props.singledata.numeroTarjeta}
                                disabled={true}>
                            </input>
                        </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button"
                 className="btn btn-primary"
                 data-dismiss="modal"
                 onClick={(event)=>props.deleteList(event,props.elementId)}>Eliminar</button>
              </div>
            </div>
          </div>
        </div>
  
        </React.Fragment>
    )
    
  }

  export default DeleteList;