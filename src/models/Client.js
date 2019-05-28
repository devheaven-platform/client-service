/* eslint-disable no-underscore-dangle, no-param-reassign */
const mongoose = require( "mongoose" );
const uuid = require( "uuid" );

/**
 * @swagger
 * components:
 *  schemas:
 *      Client:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: The id of the client
 *                  example: d40a6ad2-8518-4bd5-af9a-1edf073544ec
 *              name:
 *                  type: string
 *                  description: The name of the client
 *                  example: John's website design
 *              description:
 *                  type: string
 *                  description: The description of the client
 *                  example: IT company that makes simple websites
 *              contact:
 *                  type: object
 *                  description: the contact for the client
 *              logo:
 *                  type: string
 *                  description: The logo of the client
 *                  example: https://mylogo.nl/logo.png
 *          required:
 *              - name
 *              - contact
 */

const Client = new mongoose.Schema( {
    _id: {
        type: String,
        default: uuid.v4,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    contact: {
        type: Object,
        ref: "Contact",
    },
    logo: {
        type: String,
    },
}, { timestamps: true } );

Client.set( "toJSON", {
    virtuals: true,
    versionKey: false,
    transform: ( doc, ret ) => { delete ret._id; delete ret._v; },
} );

module.exports = mongoose.model( "Client", Client );
/* eslint-enable no-underscore-dangle, no-param-reassign */
