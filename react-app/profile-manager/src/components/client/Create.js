import React from 'react';
import { Link } from "react-router-dom";
import Api from "../services/api";

class Create extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { first_name: "", last_name: "", phone: "", email: "", sex: "", birthday: "" }

    changeValue = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }


    sendData = (e) => {
        e.preventDefault();
        const { first_name, last_name, phone, email, sex, birthday } = this.state;

        var client = { "first_name": first_name, "last_name": last_name, "phone": phone, "email": email, "sex": sex, "birthday": birthday };

        fetch(Api+"client/post", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        }).then(response => response.json())
            .then((data) => {
                console.log(data);
                window.location.href="/";
            })
            .catch(console.log);

        console.info(client);
    }

    render() {
        const { first_name, last_name, phone, email, sex, birthday } = this.state;

        return (<div className="card">
            <div className="card-header">
                <h4>Clients</h4>
            </div>
            <div className="card-body">
                <form onSubmit={this.sendData}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" required name="first_name" onChange={this.changeValue} value={first_name} id="first_name" className="form-control" placeholder="Name" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Write the clients name</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" required name="last_name" onChange={this.changeValue} value={last_name} id="last_name" className="form-control" placeholder="Last Name" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Write the clients name</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" required name="phone" id="phone" onChange={this.changeValue} value={phone} className="form-control" placeholder="Phone" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Write the clients phone number</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" required name="email" id="email" onChange={this.changeValue} value={email} className="form-control" placeholder="Email" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Write the clients email</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Sex</label>
                        <input type="text" required name="sex" id="sex" onChange={this.changeValue} value={sex} className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Write the clients Sex</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Birthday</label>
                        <input type="date" required name="birthday" onChange={this.changeValue} id="birthday" value={birthday} className="form-control" placeholder="Birthday" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Write the clients birthday</small>
                    </div>

                    <div className="btn-group mt-3" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Add client</button>
                        <Link to={"/"} className="btn btn-danger">Cancel</Link>

                    </div>
                </form>
            </div>
            <div className="card-footer text-muted">

            </div>
        </div>);
    }
}

export default Create;