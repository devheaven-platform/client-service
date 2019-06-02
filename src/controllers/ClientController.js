const ClientService = require( "../services/ClientService" );
const ApiError = require( "../models/Error" );
const validate = require( "../validators/ClientValidator" );

/**
 * Returns all clients from the database
 *
 * @param {HttpRequest} req the request object
 * @param {HttpResponse} res the response object
 */
const getAllClients = async ( req, res ) => {
    const clients = await ClientService.getAllClients();
    return res.json( clients );
};

/**
 * Returns a single client by its id
 *
 * @param {HttpRequest} req the request object
 * @param {HttpResponse} res the response object
 */
const getClientById = async ( req, res ) => {
    if ( !validate.id( req.params.id ) ) {
        return res.status( 400 ).json( new ApiError( "Id is invalid" ) );
    }

    const client = await ClientService.getClientById( req.params.id );

    if ( !client ) {
        return res.status( 404 ).json( new ApiError( "Client not found" ) );
    }

    return res.json( client );
};

/**
 * Create a new client
 *
 * @param {HttpRequest} req the request object
 * @param {HttpResponse} res the response object
 */
const createClient = async ( req, res ) => {
    const errors = validate.create( req.body );

    if ( Object.keys( errors ).length > 0 ) {
        return res.status( 400 ).json( new ApiError( "One or more values are invalid", errors ) );
    }

    const client = await ClientService.createClient( req.body );

    return res.status( 201 ).json( client );
};

/**
 * Updates a existing client
 *
 * @param {HttpRequest} req the request object
 * @param {HttpResponse} res the response object
 */
const updateClient = async ( req, res ) => {
    if ( !validate.id( req.params.id ) ) {
        return res.status( 400 ).json( new ApiError( "Id is invalid" ) );
    }

    if ( Object.keys( req.body ).length === 0 ) {
        return res.status( 400 ).json( new ApiError( "One or more values are required" ) );
    }

    const errors = validate.update( req.body );
    if ( Object.keys( errors ).length > 0 ) {
        return res.status( 400 ).json( new ApiError( "One or more values are invalid", errors ) );
    }

    const client = await ClientService.updateClient( req.params.id, req.body );

    return res.status( 200 ).json( client );
};

/**
 * Deletes a client
 *
 * @param {HttpRequest} req the request object
 * @param {HttpResponse} res the response object
 */
const deleteClient = async ( req, res ) => {
    if ( !validate.id( req.params.id ) ) {
        return res.status( 400 ).json( new ApiError( "Id is invalid" ) );
    }

    const client = await ClientService.deleteClient( req.params.id );

    if ( !client ) {
        return res.status( 404 ).json( new ApiError( "Client not found" ) );
    }

    return res.status( 204 ).send();
};

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
};
