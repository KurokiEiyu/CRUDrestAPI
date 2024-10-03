const validate = require('validate.js');

exports.validateBootcamp = (data) => {
    // user schema
    var constraint = {
        name: {
            presence: {
                allowEmpty: false
            }
        },
        description: {
            presence: {
                allowEmpty: false
            }
        },
        website: {
            presence: {
                allowEmpty: false
            }
        },
        phone: {
            presence: {
                allowEmpty: false
            }
        },
        email: {
            presence: {
                allowEmpty: false
            },
            email: true
        },
        address: {
            presence: {
                allowEmpty: false
            }
        }
    };
    
    return validate(data, constraint,{format: 'flat'});
}