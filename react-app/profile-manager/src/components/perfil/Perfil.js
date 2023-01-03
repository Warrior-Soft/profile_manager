import React from 'react';
import { Link } from "react-router-dom";
import Api from "../services/api";


class Perfil extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataLoaded: false, perfil: Object, llego:false
    }

    componentDidMount() {
        let id = window.location.pathname.split("/")[2];

        fetch(Api + "perfil/getbyclient?id=" + id)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                if (data == null) {
                    var newPerfil = { "id": 0, "client_id": id, "perfil_name": "", "password": "" };
                    this.setState({ dataLoaded: true, perfil: newPerfil });
                } else {
                    this.setState({ dataLoaded: true, perfil: data,llego: true });

                }
            })
            .catch(console.log);
    }

    changeValue = (e) => {
        const state = this.state.perfil;
        state[e.target.name] = e.target.value;
        this.setState({ perfil: state });
    }

    sendData = (e) => {
        e.preventDefault();
        const { id, client_id, perfil_name, password } = this.state.perfil;
        var perfil = { "client_id": client_id, "perfil_name": perfil_name, "password": password };

        if (this.state.llego == false) {
            fetch(Api+"perfil/post", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(perfil)
            }).then(response => response.json())
                .then((data) => {
                    console.log(data);
                    alert('Perfil creado exitosamente');
                })
                .catch(console.log);
    
            console.info(perfil);
           
        } else {
            fetch(Api+"perfil/put?id="+id, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(perfil)
            }).then(response => response.json())
                .then((data) => {
                    console.log(data);
                    alert('Perfil editado exitosamente');
                })
                .catch(console.log);
    
            console.info(perfil);

        }

    
    }

    render() {

        const { dataLoaded, perfil } = this.state;

        if (!dataLoaded) {
            return (<div>Loading.....</div>);
        } else {

            return (<div className="card">
                <div className="card-header">
                    <h4>Perfil</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={this.sendData}>
                        <input type="hidden" name="id" value={perfil.id} id="id" className="form-control" />

                        <div className="form-group">
                            <label htmlFor="">Perfil Name</label>
                            <input required type="text" name="perfil_name" onChange={this.changeValue}
                                value={perfil.perfil_name} id="perfil_name" className="form-control" placeholder="Perfil Name" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients perfil name</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input required type="password" name="password" onChange={this.changeValue}
                                value={perfil.password} id="password" className="form-control" placeholder="Password" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write the clients password</small>
                        </div>



                        <div className="btn-group mt-3" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Add/Update the perfil</button>
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

export default Perfil;

