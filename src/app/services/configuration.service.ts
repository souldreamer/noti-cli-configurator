import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';

const TEST_CONFIGURATION = {
	"cli": "ng",
	"cliCommands": [
		{
			"name": "ng serve",
			"cliParameters": ["serve"],
			"aliases": [
				{
					"cliParameters": ["s"]
				}
			],
			"watchers": {
				"stdout": [
					"server-online",
					"error",
					"rebuild-start",
					"rebuild-end"
				],
				"stderr": [
					{
						"name": "all",
						"parameters": {
							"title": "There was an error"
						}
					}
				]
			}
		},
		{
			"name": "ng generate",
			"cliParameters": ["generate"],
			"aliases": [
				{
					"cliParameters": ["g"]
				}
			],
			"watchers": {
				"stdout": [
					{
						"type": "end-stream",
						"parameters": {
							"title": "${cliParam[2]|capitalize} '${cliParam[3]}' generated"
						}
					}
				],
				"stderr": []
			}
		}
	],
	"watchers": [
		{
			"name": "all",
			"type": "regex",
			"parameters": {
				"regex": "/.*/",
				"message": "$0"
			}
		},
		{
			"name": "server-online",
			"type": "regex",
			"parameters": {
				"regex": "/\\*\\*.*(http:\\/\\/.*:\\d+).*\\*\\*/i",
				"title": "`ng serve` started",
				"message": "Server started at $1",
				"onClick": "open $1",
				"variables": {
					"serve-address": "$1",
					"rebuild": "Date.now"
				}
			}
		},
		{
			"name": "error",
			"type": "regex",
			"parameters": {
				"regex": "/\u001b\\[31mERROR\\b.*\\/(.*)\\[39m/m",
				"title": "Compile error",
				"message": "$1"
			}
		},
		{
			"name": "rebuild-start",
			"type": "regex",
			"parameters": {
				"regex": "/^webpack: bundle is now INVALID\\.$/m",
				"title": "Rebuild started",
				"variables": {
					"rebuild": "Date.now"
				}
			}
		},
		{
			"name": "rebuild-end",
			"type": "regex",
			"parameters": {
				"regex": "/^webpack: bundle is now VALID\\.$/m",
				"title": "Rebuild finished",
				"message": "Rebuild took ${rebuild|time-difference-exact}"
			}
		}
	]
};

@Injectable()
export class ConfigurationService {
	public configuration$ = Observable.of(TEST_CONFIGURATION).publishReplay(1).refCount();
	public commands$ = this.configuration$.map(conf => conf.cliCommands.map((command, index) => ({
		index,
		name: command.name == null ? JSON.stringify(command.cliParameters) : command.name,
		parameters: command.cliParameters ? command.cliParameters : null,
		aliases: command.aliases ? command.aliases.map((alias, index) => ({index, parameters: alias.cliParameters})) : null
	}))).publishReplay(1).refCount();
	
	public globalWatchers$ = this.configuration$.map(conf => conf.watchers.map((watcher, index) => ({
		index,
		name: watcher.name,
		type: watcher.type,
		parameters: watcher.parameters
	}))).publishReplay(1).refCount();
	
	constructor() { }
}
