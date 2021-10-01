import React, { Component } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Roster extends Component {
    state = {
        users: [
            { Id: 1, Name: 'Hardcoded', Age: 22 },
            { Id: 2, Name: 'Hardcoded', Age: 21 }
        ]
    };

    componentDidMount() {
        axios.get("http://localhost:3000/users")
        .then(res => {
            this.setState({users: res.data})
        })
    }


    deleteUser = (user) => {
        const filteredItems = this.state.users.filter(x => x.Id !== user.Id);
        axios.put("http://localhost:3000/users", filteredItems).then(res => {
            this.setState({users: res.data})
        })
    };




    render() {
        return (
            <div>
                <h1>Roster</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(x => {
                            return (
                                <tr key={x.Id}>
                                    <td>{x.Id}</td>
                                    <td>{x.Name}</td>
                                    <td>{x.Age}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => this.deleteUser(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="trash"></FontAwesomeIcon> 
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}