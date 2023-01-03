import React from 'react';
import { Link } from "react-router-dom";
import Api from "../services/api";


class Edit extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataLoaded: false, client: Object
    }

    componentDidMount() {
        let id = window.location.pathname.split("/")[2];

        fetch(Api+"client/getbyid?id=" + id)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ dataLoaded: true, client: data });
            })
            .catch(console.log);

    }

    changeValue = (e) => {
        const state = this.state.client;
        state[e.target.name] = e.target.value;
        this.setState({ client: state });
    }

    sendData = (e) => {
        e.preventDefault();
        const {id ,first_name, last_name, phone, email, sex, birthday } = this.state.client;
        var client = { "first_name": first_name, "last_name": last_name, "phone": phone, "email": email, "sex": sex, "birthday": birthday };

        fetch(Api+"client/put?id="+id, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        }).then(response => response.json())
            .then((data) => {
                console.log(data);
                window.location.href = "/";
            })
            .catch(console.log);

        console.info(client);
    }

    render() {

        const { dataLoaded, client } = this.state;

        if (!dataLoaded) {
            return (<div>Loading.....</div>);
        } else {

            return (<div className="card">
                <div className="card-header">
                    <h4>Clients</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={this.sendData}>
                        <input type="hidden" name="id" value={client.id} id="id" className="form-control" />

                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input required type="text" name="first_name" onChange={this.changeValue} value={client.first_name} id="first_name" className="form-control" placeholder="Name" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients name</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input required type="text" name="last_name" onChange={this.changeValue} value={client.last_name} id="last_name" className="form-control" placeholder="Last Name" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients name</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Phone Number</label>
                            <input required type="text" name="phone" id="phone" onChange={this.changeValue} value={client.phone} className="form-control" placeholder="Phone" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients phone number</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input required type="email" name="email" id="email" onChange={this.changeValue} value={client.email} className="form-control" placeholder="Email" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients email</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Sex</label>
                            <input required type="text" name="sex" id="sex" onChange={this.changeValue} value={client.sex} className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients Sex</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Birthday</label>
                            <input required type="date" name="birthday" onChange={this.changeValue} id="birthday" value={client.birthday} className="form-control" placeholder="Birthday" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients birthday</small>
                        </div>

                        <div className="btn-group mt-3" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Update client</button>
                            <Link to={"/"} className="btn btn-danger">Cancel</Link>

                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">

                </div>
            </div>);

        }
    }
}

export default Edit;

