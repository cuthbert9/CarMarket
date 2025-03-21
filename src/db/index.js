import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema  from  './../db/schema'
import { drizzle } from 'drizzle-orm/neon-http';
const sql = neon(import.meta.env.VITE_DRIZZLE_DATABASE_URL);
// export  const db = drizzle({ client: sql });
export  const db = drizzle(sql,{schema});


