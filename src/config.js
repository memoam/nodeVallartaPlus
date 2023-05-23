import { config } from 'dotenv';
config();

export const dataApp = {
  port: process.env.PORT,
};
export const dataToken = {
  secret: process.env.SECRET,
};
