const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const isString = require('../utils/testString');

const db = require('./db-handler');

// // Setup connection to the database
beforeAll(async () => await db.connect('test_users'));
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('User registration', () => {
  it('should return true if the word passed is string', () => {
    const password = '234234234dsdf';

    const result = isString(password);

    expect(result).toBeTruthy();
  });

  it('should throw an error if the word passed is NOT string', () => {
    const password = 12341431;

    const result = isString(password);

    expect(result).toBeFalsy();
  });
});
