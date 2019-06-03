const Client = require( "../models/Client" );
const Contact = require( "../models/Contact" );

/**
 * Returns all clients from the database
 *
 * @returns a list of cliets
 */
const getAllClients = async () => Client.find().populate( {
    path: "contact",
} ).exec();

/**
 * Returns a single client from the database with the given id
 *
 * @param {*} id the id of the client that will be retrieved
 * @returns the client with the given id
 */
const getClientById = async id => Client.findById( id ).populate( {
    path: "contact",
} ).exec();

/**
 * Creates a new Client
 *
 * @param {Object} newClient the client that will be created
 * @returns the created client
 */
const createClient = async ( newClient ) => {
    const client = await new Client( newClient );
    client.contact = await new Contact( newClient.contact ).save();
    return client.save();
};

/**
 * Updates a existing client with the given values
 *
 * @param {*} id the id of the client that will be updated
 * @param {Object} client the client with the updated values
 * @returns the updated client
 */
const updateClient = async ( id, data ) => {
    const client = data;

    const { contact } = await Client.findOne( { _id: id } ).exec();
    await Contact.findOneAndUpdate( { _id: contact }, client.contact, { new: true } ).exec();
    delete client.contact;
    return Client.findOneAndUpdate( { _id: id }, client, { new: true } ).populate( { path: "contact" } ).exec();
};

/**
 * Removes a client from the database
 *
 * @param {*} id the id of the client that will be removed
 * @returns the removed client
 */
const deleteClient = async id => Client.findByIdAndRemove( id );

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
};
