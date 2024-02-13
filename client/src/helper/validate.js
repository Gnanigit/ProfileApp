import toast from 'react-hot-toast';

// validate login page username
export async function usernameValidate(values){
    const errors= usernameVerify({},values);
    return errors;
}


// validate password page password
export async function passwordValidate(values){
    const errors=passwordVerify({},values);
    return errors;
}

//validate reset password
export async function resetPasswordValidation(values){
    const errors=passwordVerify({},values);
    if(values.password !== values.confirm_pwd){
        errors.exist=toast.error("Password not match")
    }
    return errors;
}
// validate username
function usernameVerify(errors = {}, values){
    if(!values.username){
        errors.username=toast.error('Username Required');
    }
    else if(values.username.includes(" ")){
        errors.username=toast.error("Invalid Username");
    }
    return errors;
}

// validate password
function passwordVerify(errors={},values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        errors.password=toast.error("Password Required")
    }
    else if(values.password.includes(" ")){
        errors.password=toast.error("Wrong Password");
    }
    else if(values.password.length<4){
        errors.password=toast.error("password must be more than 4 characters");
    }
    else if(!specialChars.test(values.password)){
        errors.password=toast.error("password must have special characters");
    }
    return errors;
}

//validate reset password
