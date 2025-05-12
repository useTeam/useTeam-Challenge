export const environmentConfig = () => ({
  server: {
    port: Number(process.env.PORT),
  },
  frontend: {
    url: process.env.FRONTEND_URL
  },
  database: {
    url: process.env.DATABASE_URL
  }
 
});
