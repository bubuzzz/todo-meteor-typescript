// declare var AbstractService: any;

export class AbstractService {
	constructor() {}
	
	public initMethod(method:{[key:string]:any}) {
		Meteor.methods(method);
	}
}