import { useEffect, useState } from "react";
import GetTrainers from "./GetTrainers";
import PostTrainers from "./PostTrainers";
import axios from "axios";

function ManageTrainers() {
    const [trainers, setTrainers] = useState([]);


    const fetchTrainers = () => {
        axios.get("http://localhost:8080/trainers").then(res => {
            setTrainers(res.data);
        }).catch(err => console.error(err));
    }
    useEffect(() => {
        fetchTrainers();
    }, []);
    return (<>
        <PostTrainers fetchTrainers={fetchTrainers} />
        <GetTrainers trainerData={trainers} />
    </>);
}

export default ManageTrainers;