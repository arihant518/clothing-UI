
const formValidation = (values) => {
    let errors = {}

    if (!values.email){
        errors.email = "Email required";
    }

    if (!values.password){
        errors.password = "Password required";
    }

    else if( values.password.length < 8){
        errors.password = "Password must have 8 character";
    }

    return errors;
}

export default formValidation