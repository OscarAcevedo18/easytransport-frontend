import { faPen, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserData } from '../../../components/userData/UserData';

/**
 * id
 * name
 * last_name
 * email
 * phone
 * dni
 * img
 * status
 * created_at
 * updated_at
 * deleted_at
 * */

const drivers = [
  {
    id: 1,
    name: 'Juan',
    last_name: 'Valdez',
    email: 'JValdez@gmail.com',
    phone: '9324422',
    dni: '11.111.111-1',
    img: '',
    status: 'Activo',
  },
  {
    id: 1,
    name: 'Elsa',
    last_name: 'Pato',
    email: 'epatp@gmail.com',
    phone: '902232345',
    dni: '22.222.222-2',
    img: '',
    status: 'Activo',
  },
];

export const TransportConfigDriver = () => {
  return (
    <Container fluid className="mx-0 trip-list-container">
      <h3 className="title-register">Listado de Conductores</h3>

      <div className="view-body">
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th>Nombre del conductor</th>
              <th>email</th>
              <th>Telefono</th>
              <th>Estado</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((e) => (
              <tr>
                <td>
                  <UserData
                    userName={`${e.name} ${e.last_name}`}
                    extraInfo={
                      <div>
                        <b>{e.dni}</b>
                      </div>
                    }
                  />
                </td>
                <td className="cell">{e.email}</td>
                <td className="cell">{e.phone}</td>
                <td className="cell">{e.status}</td>
                <td className="cell">
                  <div className="right-cell actions-cell">
                    <IconButton>
                      <FontAwesomeIcon icon={faPen} />
                    </IconButton>
                    <IconButton>
                      <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};