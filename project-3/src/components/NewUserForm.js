import { useState } from "react";
import "./NewUserForm.css";

const NewUserForm = (props) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    const onSumbmitHandler = (event) => {
        event.preventDefault();
        if(name.trim().length > 0 && +year > 0){
            props.onNewUserSumbit({
                name: name,
                year: year
            })
        }else{
            console.log("bad");
        }
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const yearChangeHandler = (event) => {
        setYear(event.target.value);
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card" style={{marginTop: "5rem"}}>
                    <div className="card-body">
                        <form onSubmit={onSumbmitHandler}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" value={name} className="form-control" onChange={nameChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Age(Years)</label>
                                <input
                                    type="number"
                                    value={year}
                                    onChange={yearChangeHandler}
                                    className="form-control"
                                    min="1"
                                    step="1"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Add New User
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUserForm;
