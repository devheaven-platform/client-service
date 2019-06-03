/* eslint complexity: 0 */
const validator = require( "validator" );

const GenericValidator = require( "./GenericValidator" );

/**
 * Validates the create client request
 *
 * @param {*} body the body containing the client values
 * @returns a error object containing the field errors
 */
const create = ( body ) => {
    const errors = {};

    if ( !body.name ) {
        errors.name = "Name is required";
    } else if ( !GenericValidator.isString( body.name ) ) {
        errors.name = "Name must be a string";
    } else if ( body.name.trim() === "" ) {
        errors.name = "Name cannot be a empty string";
    } else if ( !validator.isLength( body.name, { min: 2, max: 40 } ) ) {
        errors.name = "Name must be between 2 and 40 characters";
    }

    if ( body.description ) {
        if ( !GenericValidator.isString( body.description ) ) {
            errors.description = "Description must be a string";
        } else if ( body.description.trim() === "" ) {
            errors.description = "Description cannot be a empty string";
        } else if ( !validator.isLength( body.description, { min: 2, max: 250 } ) ) {
            errors.description = "Description must be between 2 and 250 characters";
        }
    }

    if ( !body.contact ) {
        errors.contact = "Contact is required";
    } else {
        if ( !body.contact.firstname ) {
            errors.contact.firstname = "Firstname is required";
        } else if ( !GenericValidator.isString( body.contact.firstname ) ) {
            errors.contact.firstname = "Firstname must be a string";
        } else if ( body.contact.firstname.trim() === "" ) {
            errors.contact.firstname = "Firstname cannot be a empty string";
        } else if ( !validator.isLength( body.contact.firstname, { min: 2, max: 20 } ) ) {
            errors.contact.firstname = "Firstname must be between 2 and 20 characters";
        }

        if ( !body.contact.lastname ) {
            errors.contact.lastname = "Lastname is required";
        } else if ( !GenericValidator.isString( body.contact.lastname ) ) {
            errors.contact.lastname = "Lastname must be a string";
        } else if ( body.contact.lastname.trim() === "" ) {
            errors.contact.lastname = "Lastname cannot be a empty string";
        } else if ( !validator.isLength( body.contact.lastname, { min: 2, max: 20 } ) ) {
            errors.contact.lastname = "Lastname must be between 2 and 20 characters";
        }

        if ( !body.contact.email ) {
            errors.email = "Email is required";
        } else if ( !validator.isEmail( body.contact.email ) ) {
            errors.email = "Email must be of type email";
        }

        if ( body.contact.phoneNumber && !validator.isMobilePhone( body.contact.phoneNumber ) ) {
            errors.phoneNumber = "Phone must be a valid phone number";
        }
    }

    if ( body.logo ) {
        if ( !GenericValidator.isString( body.logo ) ) {
            errors.logo = "Logo must be a string";
        } else if ( body.logo.trim() === "" ) {
            errors.logo = "Logo cannot be a empty string";
        } else if ( !validator.isLength( body.logo, { min: 2, max: 250 } ) ) {
            errors.logo = "Logo must be between 2 and 250 characters";
        }
    }

    return errors;
};

/**
 * Validates the update employee request
 *
 * @param {*} body the body containing the employee values
 * @returns a error object containing the field errors
 */
const update = ( body ) => {
    const errors = {};

    if ( body.name ) {
        if ( !GenericValidator.isString( body.name ) ) {
            errors.name = "Name must be a string";
        } else if ( body.name.trim() === "" ) {
            errors.name = "Name cannot be a empty string";
        } else if ( !validator.isLength( body.name, { min: 2, max: 40 } ) ) {
            errors.name = "Name must be between 2 and 40 characters";
        }
    }

    if ( body.description ) {
        if ( !GenericValidator.isString( body.description ) ) {
            errors.description = "Description must be a string";
        } else if ( body.description.trim() === "" ) {
            errors.description = "Description cannot be a empty string";
        } else if ( !validator.isLength( body.description, { min: 2, max: 250 } ) ) {
            errors.description = "Description must be between 2 and 250 characters";
        }
    }

    if ( body.contact ) {
        if ( !body.contact.firstname ) {
            if ( !GenericValidator.isString( body.contact.firstname ) ) {
                errors.contact.firstname = "Firstname must be a string";
            } else if ( body.contact.firstname.trim() === "" ) {
                errors.contact.firstname = "Firstname cannot be a empty string";
            } else if ( !validator.isLength( body.contact.firstname, { min: 2, max: 20 } ) ) {
                errors.contact.firstname = "Firstname must be between 2 and 20 characters";
            }
        }

        if ( body.contact.lastname ) {
            if ( !GenericValidator.isString( body.contact.lastname ) ) {
                errors.contact.lastname = "Lastname must be a string";
            } else if ( body.contact.lastname.trim() === "" ) {
                errors.contact.lastname = "Lastname cannot be a empty string";
            } else if ( !validator.isLength( body.contact.lastname, { min: 2, max: 20 } ) ) {
                errors.contact.lastname = "Lastname must be between 2 and 20 characters";
            }
        }

        if ( body.contact.email ) {
            if ( !validator.isEmail( body.contact.email ) ) {
                errors.email = "Email must be of type email";
            }
        }

        if ( body.contact.phoneNumber && !validator.isMobilePhone( body.contact.phoneNumber ) ) {
            errors.phoneNumber = "Phone must be a valid phone number";
        }
    }

    if ( body.logo ) {
        if ( !GenericValidator.isString( body.logo ) ) {
            errors.logo = "Logo must be a string";
        } else if ( body.logo.trim() === "" ) {
            errors.logo = "Logo cannot be a empty string";
        } else if ( !validator.isLength( body.logo, { min: 2, max: 250 } ) ) {
            errors.logo = "Logo must be between 2 and 250 characters";
        }
    }

    return errors;
};

module.exports = {
    id: GenericValidator.id,
    create,
    update,
};
/* eslint complexity: 0 */
