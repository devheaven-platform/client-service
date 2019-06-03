const express = require( "express" );

const asyncMiddleware = require( "../config/middleware/Async" );
const controller = require( "../controllers/ClientController" );

/**
 * @swagger
 * tags:
 *  - name: Clients
 *    description: All client related routes
 */
const router = express.Router();

/**
 * @swagger
 * tags:
 * /clients/:
 *  get:
 *      operationId: GetAllClients
 *      summary: Returns a list containing all clients
 *      responses:
 *          '200':
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type:
 *                              properties:
 *                                  name:
 *                                      type: string
 *                                      description: the name of the client
 *                                      example: John's website design
 *                                  description:
 *                                      type: string
 *                                      description: the description of the client
 *                                      example: IT company that makes simple websites
 *                                  contact:
 *                                      type: object
 *                                      properties:
 *                                          firstname:
 *                                              type: string
 *                                              description: the firstname of the contact
 *                                              example: John
 *                                          lastname:
 *                                              type: string
 *                                              description: the lastname of the contact
 *                                              example: Doe
 *                                          email:
 *                                              type: string
 *                                              description: the mail of the contact
 *                                              example: JohnDoe@mail.com
 *                                          phoneNumber:
 *                                              type: string
 *                                              description: the phone number of the contact
 *                                              example: 0643724597
 *                                  logo:
 *                                      type: string
 *                                      description: the logo of the client
 *                                      example: https://mylogo.nl/logo.png
 *          '401':
 *              $ref: '#/components/responses/Unauthorized'
 *          '500':
 *              $ref: '#/components/responses/InternalServerError'
 *      tags:
 *          - Clients
 */
router.get( "/", asyncMiddleware( controller.getAllClients ) );

/**
 * @swagger
 * tags:
 * /clients/{id}:
 *  get:
 *      operationId: GetClientById
 *      summary: Returns a single client
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the client
 *      responses:
 *          '200':
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  description: the name of the client
 *                                  example: John's website design
 *                              description:
 *                                  type: string
 *                                  description: the description of the client
 *                                  example: IT company that makes simple websites
 *                              contact:
 *                                  type: object
 *                                  properties:
 *                                      firstname:
 *                                          type: string
 *                                          description: the firstname of the contact
 *                                          example: John
 *                                      lastname:
 *                                          type: string
 *                                          description: the lastname of the contact
 *                                          example: Doe
 *                                      email:
 *                                          type: string
 *                                          description: the mail of the contact
 *                                          example: JohnDoe@mail.com
 *                                      phoneNumber:
 *                                          type: string
 *                                          description: the phone number of the contact
 *                                          example: 0643724597
 *                              logo:
 *                                  type: string
 *                                  description: the logo of the client
 *                                  example: https://mylogo.nl/logo.png
 *          '400':
 *              $ref: '#/components/responses/BadRequest'
 *          '401':
 *              $ref: '#/components/responses/Unauthorized'
 *          '404':
 *              $ref: '#/components/responses/NotFound'
 *          '500':
 *              $ref: '#/components/responses/InternalServerError'
 *      tags:
 *          - Clients
 */
router.get( "/:id", asyncMiddleware( controller.getClientById ) );

/**
 * @swagger
 * tags:
 * /clients/:
 *  post:
 *      operationId: CreateClient
 *      summary: Create a client
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: the name of the client
 *                              example: John's website design
 *                          description:
 *                              type: string
 *                              description: the description of the client
 *                              example: IT company that makes simple websites
 *                          contact:
 *                              type: object
 *                              properties:
 *                                  firstname:
 *                                      type: string
 *                                      description: the firstname of the contact
 *                                      example: John
 *                                  lastname:
 *                                      type: string
 *                                      description: the lastname of the contact
 *                                      example: Doe
 *                                  email:
 *                                      type: string
 *                                      description: the mail of the contact
 *                                      example: JohnDoe@mail.com
 *                                  phoneNumber:
 *                                      type: string
 *                                      description: the phone number of the contact
 *                                      example: 0643724597
 *                              required:
 *                                  - firstname
 *                                  - lastname
 *                                  - email
 *                          logo:
 *                              type: string
 *                              description: the logo of the client
 *                              example: https://mylogo.nl/logo.png
 *                      required:
 *                          - name
 *                          - contact
 *      responses:
 *          '204':
 *              description: Created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Client'
 *          '400':
 *              $ref: '#/components/responses/BadRequest'
 *          '401':
 *              $ref: '#/components/responses/Unauthorized'
 *          '500':
 *              $ref: '#/components/responses/InternalServerError'
 *      tags:
 *          - Clients
 */
router.post( "/", asyncMiddleware( controller.createClient ) );

/**
 * @swagger
 * tags:
 * /clients/{id}:
 *  patch:
 *      operationId: UpdateClient
 *      summary: Update a existing client
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the client to update
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: the name of the client
 *                              example: John's website design
 *                          description:
 *                              type: string
 *                              description: the description of the client
 *                              example: IT company that makes simple websites
 *                          contact:
 *                              type: object
 *                              properties:
 *                                  firstname:
 *                                      type: string
 *                                      description: the firstname of the contact
 *                                      example: John
 *                                  lastname:
 *                                      type: string
 *                                      description: the lastname of the contact
 *                                      example: Doe
 *                                  email:
 *                                      type: string
 *                                      description: the mail of the contact
 *                                      example: JohnDoe@mail.com
 *                                  phoneNumber:
 *                                      type: string
 *                                      description: the phone number of the contact
 *                                      example: 0643724597
 *                          logo:
 *                              type: string
 *                              description: the logo of the client
 *                              example: https://mylogo.nl/logo.png
 *      responses:
 *          '200':
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Client'
 *          '400':
 *              $ref: '#/components/responses/BadRequest'
 *          '401':
 *              $ref: '#/components/responses/Unauthorized'
 *          '404':
 *              $ref: '#/components/responses/NotFound'
 *          '500':
 *              $ref: '#/components/responses/InternalServerError'
 *      tags:
 *          - Clients
 */
router.patch( "/:id", asyncMiddleware( controller.updateClient ) );

/**
 * @swagger
 * tags:
 * /clients/{id}:
 *  delete:
 *      operationId: DeleteClient
 *      summary: Delete a existing client
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the client to update
 *      responses:
 *          '204':
 *              description: No Content
 *          '401':
 *              $ref: '#/components/responses/Unauthorized'
 *          '404':
 *              $ref: '#/components/responses/NotFound'
 *          '500':
 *              $ref: '#/components/responses/InternalServerError'
 *      tags:
 *          - Clients
 */
router.delete( "/:id", asyncMiddleware( controller.deleteClient ) );

module.exports = router;
