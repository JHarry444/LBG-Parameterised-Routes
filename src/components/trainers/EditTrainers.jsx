import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTrainers() {
    const navigate = useNavigate();
    const params = useParams();

    console.log("ID:", params.id);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [specialism, setSpecialism] = useState("");


    useEffect(() => {
        axios.get("http://localhost:8080/trainers/" + params.id).then(res => {
            setName(res.data.name);
            setAge(res.data.age);
            setSpecialism(res.data.specialism);
        }).catch(err => console.error(err));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch("http://localhost:8080/trainers/" + params.id, { name, age, specialism })
            .then(() => {
                // alert("NOICE")
                navigate("/trainers")
            }).catch(err => console.log(err));
    }
    return (<>
        <h1>EDIT: {params.id}</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="age">Age</label>
            <input type="text" name="age" id="age" value={age} onChange={e => setAge(e.target.value)} />
            <label htmlFor="specialism">Specialism</label>
            <input type="text" name="specialism" id="specialism" value={specialism} onChange={e => setSpecialism(e.target.value)} />
            <button type="submit">Update Trainer</button>
        </form>
    </>);
}

export default EditTrainers;