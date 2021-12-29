const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

const db = require('./db-handler');

// Setup connection to the database
beforeAll(async () => await db.connect('test_users'));
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('Delete Users', () => {});
