export * from './type';

export function getQuoted(str: string, quote: string = "'", hasSpacePadding: boolean = true): string {
	const ending = hasSpacePadding ? ' ' : '';
	return (str === '' ? '' : `${quote}${str}${quote}${ending}`);
}

export function getItemAtNormalizedIndex<T>(array: T[], index: number): T {
	const length = array.length;
	return array[(index + length) % length];
}

export function objectToArray(object: any | null | undefined): {name: string, value: string}[] {
	if (object == null) return [];
	
	return Object.entries(object).map(([name, value]) => ({name, value}));
}
