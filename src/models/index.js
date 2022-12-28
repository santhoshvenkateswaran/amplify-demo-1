// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EmpGrowth, ToDo, Person } = initSchema(schema);

export {
  EmpGrowth,
  ToDo,
  Person
};