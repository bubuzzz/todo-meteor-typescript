/// <reference path="../service/abstract.service.ts" />

declare var TaskService: any;
TaskService = class TaskService {
	constructor() {
		var abstractService = new AbstractService();
		abstractService.initMethod({
			"TaskService.addTask": this.addTask
		});		
	}
	
	public addTask(params: any) {		
		Tasks.insert(params); 
	}
}

new TaskService();