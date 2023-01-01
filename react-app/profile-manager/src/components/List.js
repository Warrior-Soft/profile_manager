import React from 'react';
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<table class="table">
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
                <tr>
                    <td scope="row">1</td>
                    <td>Dominga</td>
                    <td>Calderon</td>
                    <td>809-223-3262</td>
                    <td>domingac@gmail.com</td>
                    <td>Mujer</td>
                    <td>1961-12-23</td>
                </tr>
            </tbody>
        </table>);
    }
}

export default List;