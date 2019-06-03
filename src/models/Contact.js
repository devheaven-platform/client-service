/* eslint-disable no-underscore-dangle, no-param-reassign */
const mongoose = require( "mongoose" );
const uuid = require( "uuid" );

/**
 * @swagger
 * components:
 *  schemas:
 *      Contact:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: The id of the contact
 *                  example: d40a6ad2-8518-4bd5-af9a-1edf073544ec
 *              firstname:
 *                  type: string
 *                  description: The firstname of the contact
 *                  example: John
 *              lastname:
 *                  type: string
 *                  description: The lastname of the contact
 *                  example: Doe
 *              email:
 *                  type: string
 *                  description: The mail of the contact
 *                  example: JohnDoe@mail.com
 *              phoneNumber:
 *                  type: string
 *                  description: The phone number of the contact
 *                  example: 0643724597
 *          required:
 *              - firstname
 *              - lastname
 *              - email
 */

const Contact = new mongoose.Schema( {
    _id: {
        type: String,
        default: uuid.v4,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
}, { timestamps: true } );

Contact.set( "toJSON", {
    virtuals: true,
    versionKey: false,
    transform: ( doc, ret ) => { delete ret._id; delete ret._v; },
} );

module.exports = mongoose.model( "Contact", Contact );
/* eslint-enable no-underscore-dangle, no-param-reassign */
