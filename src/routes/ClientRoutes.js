const express = require( "express" );

const asyncMiddleware = require( "../config/middleware/Async" );
const controller = require( "../controllers/ClientController" );

/**
 * @swagger
 * tags:
 *  - name: Client
 *    description: All client related routes
 */
const router = express.Router();

/**
 * @swagger
 * tags:
 * /client/:
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
 *                              $ref: '#/components/schemas/Client'
 *          '401':
 *              $ref: '#/components/responses/Unauthorized'
 *          '500':
 *              $ref: '#/components/responses/InternalServerError'
 *      tags:
 *          - Client
 */
router.get( "/", asyncMiddleware( controller.getAllClients ) );

/**
 * @swagger
 * tags:
 * /client/{id}:
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
 *          - Client
 */
router.get( "/:id", asyncMiddleware( controller.getClientById ) );

/**
 * @swagger
 * tags:
 * /client/:
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
 *                                  mail:
 *                                      type: string
 *                                      description: the mail of the contact
 *                                      example: JohnDoe@mail.com
 *                                  number:
 *                                      type: string
 *                                      description: the phone number of the contact
 *                                      example: 0643724597
 *                              required:
 *                                  - firstname
 *                                  - lastname
 *                                  - mail
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
 *          - Client
 */
router.post( "/", asyncMiddleware( controller.createClient ) );

/**
 * @swagger
 * tags:
 * /client/{id}:
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
 *                                  mail:
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
 *          - Client
 */
router.patch( "/:id", asyncMiddleware( controller.updateClient ) );

/**
 * @swagger
 * tags:
 * /client/{id}:
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
 *          - Client
 */
router.delete( "/:id", asyncMiddleware( controller.deleteClient ) );

module.exports = router;
