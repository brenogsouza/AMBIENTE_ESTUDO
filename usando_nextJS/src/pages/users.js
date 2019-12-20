import React from 'react';
import axios from "axios"

const Users = ({ users }) => {
    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.login}</li>
                    ))
                }
            </ul>
        </div>
    )
};

Users.getInitialProps = async () => {
    const response = await axios.get(
        'https://api.github.com/orgs/rocketseat/members'
    )
    return { users: response.data };
}

export default Users;