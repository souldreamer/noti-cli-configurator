import { Injectable, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/let';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as globalWatchers from '../actions/global-watchers';

import { GlobalWatcherConfiguration } from '../models/configuration';

@Injectable()
export class GlobalWatchersService implements OnDestroy {
	watchers$: Observable<GlobalWatcherConfiguration[]>;
	watchers: GlobalWatcherConfiguration[];
	
	subscriptions: Subscription[] = [];
	
	constructor(private store: Store<fromRoot.State>) {
		this.watchers$ = this.store.let(fromRoot.getGlobalWatchers);
		this.subscriptions.push(
			this.watchers$.subscribe(watchers => this.watchers = watchers)
		);
	}
	
	add(watcher: GlobalWatcherConfiguration) {
		this.store.dispatch(new globalWatchers.AddAction(watcher));
	}
	set(oldWatcher: GlobalWatcherConfiguration | number, watcher: GlobalWatcherConfiguration) {
		if (typeof oldWatcher === 'number') {
			this.store.dispatch(new globalWatchers.SetByIndexAction({index: oldWatcher, watcher}));
		} else {
			this.store.dispatch(new globalWatchers.SetAction({oldWatcher, watcher}));
		}
	}
	delete(watcher: GlobalWatcherConfiguration | number) {
		if (typeof watcher === 'number') {
			this.store.dispatch(new globalWatchers.DeleteByIndexAction(watcher));
		} else {
			this.store.dispatch(new globalWatchers.DeleteAction(watcher));
		}
	}
	load(watchers: GlobalWatcherConfiguration[]) {
		this.store.dispatch(new globalWatchers.LoadAction(watchers));
	}
	reset() {
		this.store.dispatch(new globalWatchers.ResetAction());
	}
	
	ngOnDestroy() {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
