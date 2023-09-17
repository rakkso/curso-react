/** @type {import('jest').Config} */

const config = {
    testEnvironment: 'jest-environment jsdom',
    setupFiles: ['./jest.setup.js'],
  };
  
  module.exports = config;


