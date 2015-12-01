/// <reference path="../typings/definitions/all-definitions.d.ts" />
interface Task {
  _id?: string;
  title: string;
  status?: string;
}

declare var Tasks: Mongo.Collection<Task>;
Tasks = new Mongo.Collection<Task>('Task');