export class InterfaceClass {
	constructor(classDef){
		this.classDef = classDef;
	}
	getClass(){
		return this.classDef;
	}
}
export class InterfacePrototype{}
export function Interface(...interfaces){
	return class extends InterfacePrototype {
		static [Symbol.hasInstance](instance){
			return interfaces.some( interfaceDef => {
				if(interfaceDef instanceof InterfaceClass){
					interfaceDef = interfaceDef.getClass();
					return instance instanceof interfaceDef;
				}
				return interfaceDef(instance);
			} );
		}
		static implementClass(...classes){
			classes.forEach( classDef => interfaces.push( new InterfaceClass( classDef ) ) );
		}
		static getInterfaces(){
			return interfaces;
		}
	};
}

export function instanceOf(...interfaceClasses){
	return (classDef)=>{
		interfaceClasses.forEach( InterfaceClass => {
			InterfaceClass.implementClass(classDef)
		});
		return classDef;
	};
}
export default instanceOf;
