

const UserList = (props) => {

    return(
        <div className="row">
            <div className="col-12">
                <div className="card" style={{marginTop: "3rem"}}>
                    <div className="card-body">
                        {props.users.length === 0 && <div className="alert alert-danger">No Users</div>}
                        <ul className="list-group">
                            {props.users.map(user => <li className="list-group-item" key={user.id}>{`${user.name} (${user.year} years old)`}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;