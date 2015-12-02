/// <reference path="../service/abstract.service.ts" />

import {AbstractService} from './abstract.service';

export class TaskService extends AbstractService {
	constructor() {
		super();
		this.initMethod({
			"TaskService.addTask": this.addTask
		});		
	}
	
	public addTask(params: any) {		
		Tasks.insert(params); 
	}
}

new TaskService();