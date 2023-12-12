import axios from "axios";

function PostTrainers() {
    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8080/trainers", {
            name: event.target.name.value,
            age: event.target.age.value,
            specialism: event.target.specialism.value,
        }).then(res => {
            console.log(res)
        }).catch(err => console.error(err));
    }

    return ( <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" />
        <label htmlFor="specialism">Specialism</label>
        <input type="text" name="specialism" id="specialism" />
        <button type="submit">Create Trainer</button>
    </form> );
}

export default PostTrainers;