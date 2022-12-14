// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ToDo, Person } = initSchema(schema);

export {
  ToDo,
  Person
};