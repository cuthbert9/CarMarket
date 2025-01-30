import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:ylh0NJ8zvxZi@ep-steep-shape-a8mi2gju.eastus2.azure.neon.tech/CarMarket?sslmode=require",
  },
});