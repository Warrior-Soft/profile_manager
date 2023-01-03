import React from 'react';
import { Link } from "react-router-dom";
import Api from "../services/api";


class Perfil extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataLoaded: false, client: Object
    }

    componentDidMount() {
        let id = window.location.pathname.split("/")[2];

        fetch(Api + "client/getbyid?id=" + id)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ dataLoaded: true, client: data });
            })
            .catch(console.log);
    }


    render() {

        const { dataLoaded, client } = this.state;

        if (!dataLoaded) {
            return (<div>Loading.....</div>);
        } else {

            return (

                <div className='container'>
                    <div className="card">
                        <div className="card-header">

                        </div>
                        <div className="card-body">
                            <h4>Client Information</h4>
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

                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        <tr>
                                            <td scope="row">{client.id}</td>
                                            <td>{client.first_name}</td>
                                            <td>{client.last_name}</td>
                                            <td>{client.phone}</td>
                                            <td>{client.email}</td>
                                            <td>{client.sex}</td>
                                            <td>{client.birthday}</td>

                                        </tr>


                                    }

                                </tbody>
                            </table>

                            <h4>Profile</h4>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Profile name</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        client.perfils.map(
                                            (perfil) => (
                                                <tr key={perfil.id}>
                                                    <td scope="row">{perfil.id}</td>
                                                    <td>{perfil.perfil_name}</td>
                                                </tr>
                                            )
                                        )
                                    }

                                </tbody>
                            </table>

                            <h4>Address</h4>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>House number</th>
                                        <th>Street Name</th>
                                        <th>Street Number</th>
                                        <th>Municipality</th>
                                        <th>Province</th>
                                        <th>Country</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        client.addresses.map(
                                            (direction) => (
                                                <tr key={direction.id}>
                                                    <td>{direction.house_number}</td>
                                                    <td>{direction.street_name}</td>
                                                    <td>{direction.street_number}</td>
                                                    <td>{direction.municipality}</td>
                                                    <td>{direction.province}</td>
                                                    <td>{direction.country}</td>
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

                    <br></br>
                </div>

            );

        }
    }
}

export default Perfil;

