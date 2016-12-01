import { CliCommand } from '../models/configuration';
import { at } from 'lodash';

export function getParameters(parameterString: string): string[] {
	return parameterString.split(/\s+/).filter(parameter => parameter !== '');
}

export function getDisplayString(parameters: string[]): string {
	return parameters.join(' ');
}

export function doesSectionHaveData(command: CliCommand | null | undefined, section: string): boolean {
	return (
		command != null &&
		at(<any>command, [section])[0] != null &&
		(<any>at(<any>command, [section])[0]).length > 0
	);
}
