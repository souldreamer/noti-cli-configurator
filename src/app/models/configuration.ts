export interface WatcherParameters {
	title?: string;
	message?: string;
	icon?: string;
	sound?: boolean;
	onExecute?: string;
	onClick?: string;
	onTimeout?: string;
	variables?: WatcherConfigurationVariables;
	[otherParameterName: string]: any;
};

export interface CliWatchers {
	stderr?: (string | WatcherConfiguration)[];
	stdout?: (string | WatcherConfiguration)[];
};

export interface CliCommandAlias {
	cliParameters: string[];
};

export interface CliCommand {
	name?: string;
	cliParameters?: string[];
	aliases?: CliCommandAlias[];
	watchers: CliWatchers;
};

export interface WatcherConfigurationVariables {
	[variable: string]: string;
};

export interface WatcherConfiguration {
	name?: string;
	type?: 'end-stream' | 'regex';
	parameters?: WatcherParameters;
};

export interface GlobalWatcherConfiguration {
	name: string;
	type: 'end-stream' | 'regex';
	parameters?: WatcherParameters;
}

export interface Configuration {
	cli: string;
	cliCommands: CliCommand[];
	watchers?: GlobalWatcherConfiguration[];
};
