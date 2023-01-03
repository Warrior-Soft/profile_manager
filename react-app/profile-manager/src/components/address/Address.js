import React from 'react';
import { Link } from "react-router-dom";
import Api from "../services/api";


class Perfil extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataLoaded: false, directions: [], getAddress: false,
        address: {
            "id": 0,
            "client_id": 0,
            "house_number": "",
            "street_name": "",
            "street_number": "",
            "municipality": "",
            "province": "",
            "country": ""
        }
    }

    componentDidMount() {
        this.loadAddress();
    }

    loadAddress() {
        let id = window.location.pathname.split("/")[2];

        fetch(Api + "address/getallbyclient?id=" + id)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ dataLoaded: true, directions: data });
                // if (data == null) {
                //     var newPerfil = { "id": 0, "client_id": id, "perfil_name": "", "password": "" };
                //     this.setState({ dataLoaded: true, perfil: newPerfil });
                // } else {
                //     this.setState({ dataLoaded: true, perfil: data,llego: true });

                // }
            })
            .catch(console.log);
    }

    updateAddress(e) {
        this.setState({
            getAddress: true,
            address: {
                "id": e.id,
                "client_id": e.client_id,
                "house_number": e.house_number,
                "street_name": e.street_name,
                "street_number": e.street_number,
                "municipality": e.municipality,
                "province": e.province,
                "country": e.country
            }
        });

    }

    deleteAddress = (id) => {
        console.log(id);
        fetch(Api + "address/delete?id=" + id)

            .then((data) => {
                console.log(data);
                this.loadAddress();
            })
            .catch(console.log);
    }

    changeValue = (e) => {
        const state = this.state.address;
        state[e.target.name] = e.target.value;
        this.setState({ address: state });
    }

    sendData = (e) => {
        let id = window.location.pathname.split("/")[2];
        e.preventDefault();

        const { address } = this.state;

        var newAddress = {
            "id": address.id,
            "client_id": id,
            "house_number": address.house_number,
            "street_number": address.street_number,
            "street_name": address.street_name,
            "municipality": address.municipality,
            "province": address.province,
            "country": address.country

        };

        if (this.state.getAddress == false) {
            fetch(Api + "address/post", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAddress)
            }).then(response => response.json())
                .then((data) => {

                    this.setState({
                        address: {
                            "id": 0,
                            "client_id": 0,
                            "house_number": "",
                            "street_name": "",
                            "street_number": "",
                            "municipality": "",
                            "province": "",
                            "country": ""
                        }
                    });
                    console.log(data);
                    alert('Address created successfull');
                    this.loadAddress();

                })
                .catch(console.log);

            console.info(newAddress);

        } else {
            fetch(Api + "address/put?id=" + newAddress.id, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAddress)
            }).then(response => response.json())
                .then((data) => {

                    this.setState({
                        getAddress: false,
                        address: {
                            "id": 0,
                            "client_id": 0,
                            "house_number": "",
                            "street_name": "",
                            "street_number": "",
                            "municipality": "",
                            "province": "",
                            "country": ""
                        }
                    });
                    console.log(data);
                    alert('Address updated successfull');
                    this.loadAddress();

                })
                .catch(console.log);

            console.info(newAddress);
        }


    }

    render() {

        const { dataLoaded, directions, address } = this.state;

        if (!dataLoaded) {
            return (<div>Loading.....</div>);
        } else {

            return (

                <div className='container'>
                    <div className="card">
                        <div className="card-header">
                            <h4>Address</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.sendData}>
                                <input type="hidden" name="id" value={address.id} id="id" className="form-control" />

                                <div className="form-group">
                                    <label htmlFor="">House Number</label>
                                    <input required type="number" min="1" name="house_number" onChange={this.changeValue}
                                        value={address.house_number} id="house_number" className="form-control" placeholder="House Number" aria-describedby="helpId" />
                                    <small id="helpId" className="text-muted">Write the House Number</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Street Name</label>
                                    <input required type="text" name="street_name" onChange={this.changeValue}
                                        value={address.street_name} id="street_name" className="form-control" placeholder="Street Name" aria-describedby="helpId" />
                                    <small id="helpId" className="text-muted">Write the street name</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Street Number</label>
                                    <input required type="number" name="street_number" onChange={this.changeValue}
                                        value={address.street_number} min="1" id="street_number" className="form-control" placeholder="Street Number" aria-describedby="helpId" />
                                    <small id="helpId" className="text-muted">Write the street number</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Municipality</label>
                                    <input required type="text" name="municipality" onChange={this.changeValue}
                                        value={address.municipality} id="municipality" className="form-control" placeholder="Municipality" aria-describedby="helpId" />
                                    <small id="helpId" className="text-muted">Write the municipality</small>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="">Province</label>
                                    <input required type="text" name="province" onChange={this.changeValue}
                                        value={address.province} id="province" className="form-control" placeholder="Province" aria-describedby="helpId" />
                                    <small id="helpId" className="text-muted">Write the province</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Country</label>
                                    <input required type="text" name="country" onChange={this.changeValue}
                                        value={address.country} id="country" className="form-control" placeholder="Country" aria-describedby="helpId" />
                                    <small id="helpId" className="text-muted">Write the country</small>
                                </div>


                                <div className="btn-group mt-3" role="group" aria-label="">
                                    <button type="submit" className="btn btn-success">Add/Update the perfil</button>
                                    <Link to={"/"} className="btn btn-danger">Cancel</Link>

                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">

                        </div>
                    </div>

                    <br></br>

                    <div className="card">
                        <div className="card-header">

                        </div>
                        <div className="card-body">
                            <h4>Address List</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>House number</th>
                                        <th>Street Name</th>
                                        <th>Street Number</th>
                                        <th>Municipality</th>
                                        <th>Province</th>
                                        <th>Country</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        directions.map(
                                            (direction) => (
                                                <tr key={direction.id}>
                                                    <td>{direction.house_number}</td>
                                                    <td>{direction.street_name}</td>
                                                    <td>{direction.street_number}</td>
                                                    <td>{direction.municipality}</td>
                                                    <td>{direction.province}</td>
                                                    <td>{direction.country}</td>
                                                    <td>
                                                        <div className="btn-group" role="group" aria-label="">

                                                            <button onClick={() => this.updateAddress(direction)} className="btn btn-success">Update</button>
                                                            <button onClick={() => this.deleteAddress(direction.id)} className="btn btn-danger">Delete</button>
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
                </div>

            );

        }
    }
}

export default Perfil;

