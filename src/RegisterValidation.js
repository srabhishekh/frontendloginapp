function validation(values) {
    let error = {}
    const username_pattern = /^[a-zA-Z0-9]+$/;
    const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const name_pattern = /^([a-zA-Z ]){2,30}$/;

    if (values.username==="") {
        error.username="Username should not be empty";
    } else if (!username_pattern.test(values.username)) {
        error.username = "Please enter valid username";
    } else {
        error.username = "";
    }

    if (values.password==="") {
        error.password="Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Please enter valid password";
    } else {
        error.password = "";
    }

    if (values.name==="") {
        error.name="Full name should not be empty";
    } else if (!name_pattern.test(values.name)) {
        error.name = "Please enter valid full name";
    } else {
        error.name = "";
    }

    if (values.email==="") {
        error.email="Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Please enter valid email";
    } else {
        error.email = "";
    }

    return error;
}

export default validation;