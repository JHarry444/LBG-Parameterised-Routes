import axios from "axios";
import { useEffect, useState } from "react";

function GetTrainees() {
    const [trainees, setTrainees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/trainees").then(res => {
            setTrainees(res.data);
        }).catch(err => console.error(err))
    })

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
                    Cohort
                </th>
            </tr>
        </thead>
        <tbody>
            {
                trainees.map(trainee => (<tr key={trainee.id}>
                    <td>{trainee.name}</td>
                    <td>{trainee.age}</td>
                    <td>{trainee.cohort}</td>
                </tr>))
            }
        </tbody>
    </table>);
}

export default GetTrainees;