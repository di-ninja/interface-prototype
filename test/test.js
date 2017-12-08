import { expect } from 'chai'

import {
	instanceOf,
	Interface,
	InterfacePrototype,
} from '../src/interface-prototype'

describe('instanceOf implemented class',function(){
	
	const I = new Interface();
	
	it('sould be instanceof I',function(){
				
		@instanceOf(I)
		class A{}

		@instanceOf(I)
		class B{}

		const a = new A();
		const b = new B();
		expect(a).instanceof(I);
		expect(b).instanceof(I);
		
	});
	
	it('sould not be instanceof I',function(){
		
		class A{}

		class B{}
		
		const a = new A();
		const b = new B();
		expect(a).not.instanceof(I);
		expect(b).not.instanceof(I);
		
	});

});
describe('custom callback type check via instanceof operator',function(){
	
	it('sould be instanceof String',function(){
		
		const StringInstance = new Interface((val)=>{
			return typeof val === 'string';
		});

		expect('foo' instanceof StringInstance).equal(true);
		expect('bar' instanceof StringInstance).equal(true);
		
	});
	
	it('sould not be instanceof String',function(){
		
		const StringInstance = new Interface((val)=>{
			return typeof val === 'string';
		});

		expect(1 instanceof StringInstance).equal(false);
		expect(2 instanceof StringInstance).equal(false);
		
	});

});

describe('mixed implemented + custom callback',function(){
	
	const Mixed = new Interface((val)=>{
		return val === 123;
	});
	
	@instanceOf(Mixed)
	class A{}
	
	class B{}
	
	
	it('sould be instanceof Mixed',function(){
		expect(123 instanceof Mixed).equal(true);
	});
	it('sould be instanceof Mixed',function(){
		const a = new A();
		expect(a instanceof Mixed).equal(true);
	});
	
	it('sould not be instanceof Mixed',function(){
		expect(456 instanceof Mixed).equal(false);
	});
	it('sould not be instanceof Mixed',function(){
		const b = new B();
		expect(b instanceof Mixed).equal(false);
	});

});


describe('check class is an interface',function(){
	
	const I = new Interface();
	
	it('sould be instanceof InterfacePrototype',function(){
		
		expect( I.prototype ).instanceof(InterfacePrototype);
		
	});
});
