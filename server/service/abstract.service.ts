// declare var AbstractService: any;
declare var AbstractService: any;
AbstractService= class AbstractService {
	constructor() {}
	
	public initMethod(method:{[key:string]:any}) {
		Meteor.methods(method);
	}
}