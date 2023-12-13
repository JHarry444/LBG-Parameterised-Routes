import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function GetTrainers(props) {
    const navigate = useNavigate();

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
                props.trainerData.map(({ id, name, age, cohort }) => (<tr key={id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{cohort}</td>
                    <td><button type="button" onClick={() => {
                        axios.delete("http://localhost:8080/trainers/" + id)
                            .then(res => { })
                            .catch(err => console.error(err));
                    }}>DELETE</button></td>
                    <td>
                        <button type="button" onClick={() => navigate("/trainers/edit/" + id)}>EDIT</button>
                    </td>
                </tr>))
            }
        </tbody>
    </table>);
}

GetTrainers.propTypes = {
    trainerData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        specialism: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired).isRequired
}

export default GetTrainers;