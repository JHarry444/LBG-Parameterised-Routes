import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetTrainers() {
    const [trainers, setTrainers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/trainers").then(res => {
            setTrainers(res.data);
        }).catch(err => console.error(err))
    }, []);

    const trainerRows = [];

    for (const trainer of trainers) {
        trainerRows.push(<tr key={trainer.id}>
            <td>{trainer.name}</td>
            <td>{trainer.age}</td>
            <td>{trainer.specialism}</td>
            <td><button type="button" onClick={()=> {
                axios.delete("http://localhost:8080/trainers/" + trainer.id)
                .then(res => {}) 
                .catch(err => console.error(err));
            }}>DELETE</button></td>
            <td>
                <button type="button" onClick={() => navigate("/trainers/edit/" + trainer.id)}>EDIT</button>
            </td>
        </tr>)
    }

    return (<table>
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Specialism
                </th>
            </tr>
        </thead>
        <tbody>
            {
                trainerRows
            }
        </tbody>
    </table>);
}

export default GetTrainers;