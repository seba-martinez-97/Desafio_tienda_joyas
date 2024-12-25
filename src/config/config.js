import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '79293224',
  database: 'joyas',
  port: 5432,
  allowExitOnIdle: true,
});