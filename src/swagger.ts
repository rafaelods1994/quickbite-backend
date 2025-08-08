import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Express } from 'express';
import path from 'path';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'QuickBite API',
            version: '1.0.0',
            description: 'API documentation for the QuickBite food ordering app',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            schemas: {
                Dish: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        description: { type: 'string' },
                        price: { type: 'number' },
                        available: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' }
                    }
                },
                DishInput: {
                    type: 'object',
                    required: ['name', 'description', 'price', 'available'],
                    properties: {
                        name: { type: 'string' },
                        description: { type: 'string' },
                        price: { type: 'number' },
                        available: { type: 'boolean' }
                    }
                },
                Order: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        userId: { type: 'integer' },
                        total: { type: 'number' },
                        status: {
                            type: 'string',
                            enum: ['pending', 'confirmed', 'preparing', 'delivered', 'cancelled']
                        },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' }
                    }
                },
                OrderInput: {
                    type: 'object',
                    required: ['userId', 'total', 'status'],
                    properties: {
                        userId: { type: 'integer' },
                        total: { type: 'number' },
                        status: {
                            type: 'string',
                            enum: ['pending', 'confirmed', 'preparing', 'delivered', 'cancelled']
                        }
                    }
                },
                User: {
                    type: 'object',
                    description: 'Returned user object (password excluded)',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        email: { type: 'string', format: 'email' },
                        role: { type: 'string' },
                        created_at: { type: 'string', format: 'date-time' },
                        updated_at: { type: 'string', format: 'date-time' }
                    }
                },
                UserInput: {
                    type: 'object',
                    description: 'Payload for creating a user (password required)',
                    required: ['name', 'email', 'password', 'role'],
                    properties: {
                        name: { type: 'string' },
                        email: { type: 'string', format: 'email' },
                        password: { type: 'string', format: 'password' },
                        role: { type: 'string' }
                    }
                },
                OrderItem: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        orderId: { type: 'integer' },
                        dishId: { type: 'integer' },
                        quantity: { type: 'integer' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' }
                    }
                },
                OrderItemInput: {
                    type: 'object',
                    required: ['orderId', 'dishId', 'quantity'],
                    properties: {
                        orderId: { type: 'integer' },
                        dishId: { type: 'integer' },
                        quantity: { type: 'integer' }
                    }
                }

            }
        }
    },
    apis: [path.resolve(__dirname, './routes/*.ts')],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
};
