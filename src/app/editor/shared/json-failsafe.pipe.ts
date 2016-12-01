import { Pipe, PipeTransform } from '@angular/core';
import { objectToArray } from '../../util/index';

@Pipe({
	name: 'jsonFailsafe'
})
export class JsonFailsafePipe implements PipeTransform {
	
	transform(value: any, args?: any): any {
		if (typeof value === 'object') {
			return `{${objectToArray(value).map(({name, value}) => `${name}: ${value}`).join(', ')}}`;
		} else return JSON.stringify(value);
	}
	
}
