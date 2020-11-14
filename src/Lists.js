import React from 'react'
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';

function Lists(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.nombreTitular}</td>
            <td>{element.nombreEntidad}</td>
            <td>{element.numeroTarjeta}</td>
            <td>{element.marca}</td>
            <td>{element.fechaCaducidad}</td>
            <td>{element.cvv}</td>
            <td><UpdateList
                elementId={element.numeroTarjeta}
                singledata={props.singledata}
                getList={props.getList}
                updateList={props.updateList}
                handleChange={props.handleChange}></UpdateList></td>
            <td>
                <DeleteList
                elementId={element.numeroTarjeta}
                singledata={props.singledata}
                getList={props.getList}
                deleteList={props.deleteList}></DeleteList>
            </td>
        </tr>)
    });
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Nombre Titular</th>
                  <th>Banco</th>
                  <th>Numero Tarjeta</th>
                  <th>Marca</th>
                  <th>Fecha Caducidad</th>
                  <th>CVV</th>
                  <th>Update</th>
                  <th>Delete</th>
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default Lists;