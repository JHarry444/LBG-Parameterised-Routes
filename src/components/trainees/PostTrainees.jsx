import axios from "axios";

function PostTrainers() {
    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8080/trainees", {
            name: event.target.name.value,
            age: event.target.age.value,
            cohort: event.target.cohort.value,
        }).then(res => {}).catch(err => console.error(err));
    }

    return ( <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" />
        <label htmlFor="cohort">Cohort</label>
        <input type="text" name="cohort" id="cohort" />
        <button type="submit">Create Trainee</button>
    </form> );
}

export default PostTrainers;