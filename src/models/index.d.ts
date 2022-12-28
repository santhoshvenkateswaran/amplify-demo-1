import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerEmpGrowth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmpGrowth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly data?: (number | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmpGrowth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmpGrowth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly data?: (number | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EmpGrowth = LazyLoading extends LazyLoadingDisabled ? EagerEmpGrowth : LazyEmpGrowth

export declare const EmpGrowth: (new (init: ModelInit<EmpGrowth>) => EmpGrowth) & {
  copyOf(source: EmpGrowth, mutator: (draft: MutableModel<EmpGrowth>) => MutableModel<EmpGrowth> | void): EmpGrowth;
}

type EagerToDo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ToDo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyToDo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ToDo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ToDo = LazyLoading extends LazyLoadingDisabled ? EagerToDo : LazyToDo

export declare const ToDo: (new (init: ModelInit<ToDo>) => ToDo) & {
  copyOf(source: ToDo, mutator: (draft: MutableModel<ToDo>) => MutableModel<ToDo> | void): ToDo;
}

type EagerPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly date_of_birth?: string | null;
  readonly date_of_joining?: string | null;
  readonly email: string;
  readonly location: string;
  readonly mobile?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly date_of_birth?: string | null;
  readonly date_of_joining?: string | null;
  readonly email: string;
  readonly location: string;
  readonly mobile?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Person = LazyLoading extends LazyLoadingDisabled ? EagerPerson : LazyPerson

export declare const Person: (new (init: ModelInit<Person>) => Person) & {
  copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}