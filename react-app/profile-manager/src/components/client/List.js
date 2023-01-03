import React from 'react';
import { Link } from "react-router-dom";
import Api from "../services/api";

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataLoaded: false,
        clients: []
    }

    deleteClients = (id) => {
        console.log(id);
        fetch(Api+"client/delete?id=" + id)
            
            .then((data) => {
                console.log(data);
                this.loadClients();
            })
            .catch(console.log);
    }


    loadClients() {
        fetch(Api+"client/getall")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ dataLoaded: true, clients: data });
            })
            .catch(console.log);
    }

    componentDidMount() {
        this.loadClients();
    }

    render() {
        const { dataLoaded, clients } = this.state;
        if (!dataLoaded) {
            return (<div>Loading.....</div>);
        } else {
            return (
                <div className="card">
                    <div className="card-header">
                        <Link to={"/create"} className="btn btn-success">Add new client</Link>
                    </div>
                    <div className="card-body">
                        <h4>Clients List</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Sex</th>
                                    <th>Birthday</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clients.map(
                                        (client) => (
                                            <tr key={client.id}>
                                                <td scope="row">{client.id}</td>
                                                <td>{client.first_name}</td>
                                                <td>{client.last_name}</td>
                                                <td>{client.phone}</td>
                                                <td>{client.email}</td>
                                                <td>{client.sex}</td>
                                                <td>{client.birthday}</td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="">
                                                        <Link to={"/info/"+client.id} className="btn btn-success">Info</Link>
                                                        <Link to={"/perfil/"+client.id} className="btn btn-info">Perfil</Link>
                                                        <Link to={"/address/"+client.id} className="btn btn-primary">Address</Link>
                                                        <Link to={"/edit/"+client.id} className="btn btn-warning">Edit</Link>
    
                                                        <button onClick={() => this.deleteClients(client.id)} className="btn btn-danger">Delete</button>
                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>

            );

        }
    }
}

export default List;