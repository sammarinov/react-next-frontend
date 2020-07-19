import dotenv from 'dotenv';
import nock from 'nock';
import { setConfig } from 'next/config';
import 'jest-styled-components';
import '@testing-library/jest-dom';

dotenv.config({ path: '.env.test' });

setConfig({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});

nock('http://localhost:3000')
  .get('/person')
  .query({ isKeyWorker: true })
  .reply(200, {
    name: 'John',
    age: 35,
  });

nock('http://localhost:3000')
  .get('/200')
  .reply(200, { success: true });

nock('http://localhost:3000')
  .get('/404')
  .reply(404, { success: false });
