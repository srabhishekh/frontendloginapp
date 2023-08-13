function validation(values) {
    let error = {}
    const username_pattern = /^[a-zA-Z0-9]+$/;

    if (values.username==="") {
        error.username="Name should not be empty"
    } else if (!username_pattern.test(values.username)) {
        error.username = "Please enter valid username";
    } else {
        error.username = "";
    }

    if (values.password==="") {
        error.password="Password should not be empty"
    } else {
        error.password = "";
    }
    return error;
}

export default validation;