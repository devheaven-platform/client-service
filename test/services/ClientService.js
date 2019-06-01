const { expect, should } = require( "chai" );

const Client = require( "../../src/models/Client" );
const Contact = require( "../../src/models/Contact" );
const ClientService = require( "../../src/services/ClientService" );

describe( "ClientService", () => {
    describe( "getAllClients", () => {
        before( async () => {
            const testClient1 = {
                name: "Company1",
                description: "Description1",
                contact: await new Contact( {
                    firstname: "John",
                    lastname: "Doe",
                    mail: "JohnDoe@mail.com",
                    phoneNumber: "0643724597",
                } ).save(),
                logo: "https://logo.com/logo.png",
            };
            const testClient2 = {
                name: "Company2",
                description: "Description2",
                contact: await new Contact( {
                    firstname: "John2",
                    lastname: "Doe",
                    mail: "JohnDoe@mail.com",
                    phoneNumber: "0643724597",
                } ).save(),
                logo: "https://logo.com/logo.png",
            };

            await new Client( testClient1 ).save();
            await new Client( testClient2 ).save();
        } );

        it( "Should retrieve all of the clients described above", async () => {
            const clients = await ClientService.getAllClients();

            expect( clients.length ).to.equal( 2 );
            expect( clients[ 0 ].name ).to.equal( "Company1" );
            expect( clients[ 0 ].description ).to.equal( "Description1" );
            expect( clients[ 1 ].name ).to.equal( "Company2" );
            expect( clients[ 1 ].description ).to.equal( "Description2" );
        } );
    } );

    describe( "getClientById", () => {
        it( "Should return a single client", async () => {
            const testClient1 = {
                name: "Company1",
                description: "Doe",
                contact: await new Contact( {
                    firstname: "John",
                    lastname: "Doe",
                    mail: "JohnDoe@mail.com",
                    phoneNumber: "0643724597",
                } ).save(),
                logo: "https://logo.com/logo.png",
            };

            const { id } = await new Client( testClient1 ).save();

            const client = await ClientService.getClientById( id );

            expect( client.name ).to.equal( testClient1.name );
            expect( client.contact.firstname ).to.equal( testClient1.contact.firstname );
        } );

        it( "Should return null if no client is found", async () => {
            const client = await ClientService.getClientById( "55417624-c159-4eab-9260-d4679a2e9b31" );

            should().not.exist( client );
        } );
    } );

    describe( "createClient", () => {
        it( "Should create a new client", async () => {
            const testClient1 = {
                name: "Company1",
                description: "Doe",
                contact: {
                    firstname: "John",
                    lastname: "Doe",
                    mail: "JohnDoe@mail.com",
                    phoneNumber: "0643724597",
                },
                logo: "https://logo.com/logo.png",
            };

            const client = await ClientService.createClient( testClient1 );

            expect( client.name ).to.equal( testClient1.name );
            expect( client.contact.firstname ).to.equal( testClient1.contact.firstname );
            should().exist( client.id );
            should().exist( client.contact.id );
        } );
    } );

    describe( "updateClient", () => {
        it( "Should update a client", async () => {
            const testClient1 = {
                name: "Company1",
                description: "Doe",
                contact: await new Contact( {
                    firstname: "John",
                    lastname: "Doe",
                    mail: "JohnDoe@mail.com",
                    phoneNumber: "0643724597",
                } ).save(),
                logo: "https://logo.com/logo.png",
            };

            const { id } = await new Client( testClient1 ).save();

            const client = await ClientService.updateClient( id, {
                name: "Company2",
                contact: {
                    firstname: "Jo",
                },
            } );

            expect( client.name ).to.equal( "Company2" );
            expect( client.contact.firstname ).to.equal( "Jo" );
        } );
    } );

    describe( "deleteClient", () => {
        it( "Should delete a client", async () => {
            const testClient1 = {
                name: "Company1",
                description: "Doe",
                contact: await new Contact( {
                    firstname: "John",
                    lastname: "Doe",
                    mail: "JohnDoe@mail.com",
                    phoneNumber: "0643724597",
                } ).save(),
                logo: "https://logo.com/logo.png",
            };

            const { id } = await new Client( testClient1 ).save();

            await ClientService.deleteClient( id );

            should().not.exist( await Client.findById( id ) );
        } );

        it( "Should return null if no client is found", async () => {
            const client = await ClientService.deleteClient( "55417624-c159-4eab-9260-d4679a2e9b31" );

            should().not.exist( client );
        } );
    } );
} );
