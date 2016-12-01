import {
	trigger, state, style, transition, animate, AnimationStyleMetadata
} from '@angular/core';

class AnimationTransitions {
	static BounceOut(
		time: string,
		leaveTransition: string = ':leave',
		startStyle: AnimationStyleMetadata | undefined = undefined,
		endStyle: AnimationStyleMetadata | undefined = undefined
	) {
		return transition(leaveTransition, [
			...(startStyle == null ? [] : [startStyle]),
			animate(`${time} cubic-bezier(0.6, -0.28, 0.735, 0.045)`, endStyle)
		]);
	}
	static BounceIn(
		time: string,
		enterTransition: string = ':enter',
		startStyle: AnimationStyleMetadata | undefined = undefined,
		endStyle: AnimationStyleMetadata | undefined = undefined
	) {
		return transition(enterTransition, [
			...(startStyle == null ? [] : [startStyle]),
			animate(`${time} cubic-bezier(0.175, 0.885, 0.32, 1.275)`, endStyle)
		]);
	}
	static Linear(
		time: string,
		transitionStates: string,
		startStyle: AnimationStyleMetadata | undefined = undefined,
		endStyle: AnimationStyleMetadata | undefined = undefined
	) {
		return transition(transitionStates, [
			...(startStyle == null ? [] : [startStyle]),
			animate(time, endStyle)
		]);
	}
}

export class Animations {
	static AnimateHeightOnShowHide = trigger('animateHeightOnShowHide', [
		state('show', style({height: '*', overflow: 'hidden', opacity: 1})),
		state('hide', style({height: '0px', overflow: 'hidden', opacity: 0})),
		state('void', style({height: '0px', overflow: 'hidden', opacity: 0})),
		AnimationTransitions.BounceIn('300ms'),
		AnimationTransitions.BounceOut('200ms'),
		AnimationTransitions.BounceIn('300ms', 'hide => show'),
		AnimationTransitions.BounceOut('200ms', 'show => hide')
	]);
	static AnimateHeightOnShowHideStrict = trigger('animateHeightOnShowHideStrict', [
		state('show', style({height: '*', overflow: 'visible', opacity: 1})),
		state('hide', style({height: '0px', overflow: 'hidden', opacity: 0})),
		AnimationTransitions.BounceIn('300ms', 'hide => show'),
		AnimationTransitions.BounceOut('200ms', 'show => hide')
	]);
	static AnimateHeightOnEnterLeaveStrict = trigger('animateHeightOnEnterLeaveStrict', [
		state('*', style({height: '*', overflow: 'visible', opacity: 1})),
		state('show', style({height: '*', overflow: 'visible', opacity: 1})),
		AnimationTransitions.BounceIn('300ms', 'void => show', style({height: '0px', overflow: 'hidden', opacity: 0})),
		AnimationTransitions.BounceOut('200ms', 'show => void', undefined, style({height: '0px', overflow: 'hidden', opacity: 0}))
	]);
	static AnimateSizeOnShowHide = trigger('animateSizeOnShowHide', [
		state('*', style({height: '*', width: '*', overflow: 'hidden', opacity: 1})),
		state('void', style({height: '0', width: '0', overflow: 'hidden', opacity: 0})),
		AnimationTransitions.BounceIn('300ms'),
		AnimationTransitions.BounceOut('200ms'),
		AnimationTransitions.BounceIn('300ms', 'hide => show'),
		AnimationTransitions.BounceOut('200ms', 'show => hide')
	]);
	static AnimateRotation = trigger('animateRotation', [
		state('up', style({transform: 'rotate(0deg)'})),
		state('right', style({transform: 'rotate(90deg)'})),
		state('down', style({transform: 'rotate(180deg)'})),
	    state('left', style({transform: 'rotate(270deg)'})),
		AnimationTransitions.Linear('200ms', '* => up', undefined, style({transform: 'rotate(360deg)'})),
		AnimationTransitions.Linear('200ms', '* => *')
	])
	static FlyInOutOnShowHide = trigger('flyInOutOnShowHide', [
	    state('*', style({transform: 'translateX(0)', opacity: 1, height: '*'})),
	    AnimationTransitions.BounceIn('400ms', undefined, style({transform: 'translateX(-50%)', opacity: 0, height: 0})),
	    AnimationTransitions.BounceOut('300ms', undefined, undefined, style({transform: 'translateX(50%)', opacity: 0, height: 0})),
	    AnimationTransitions.BounceIn('400ms', 'hide => show', style({transform: 'translateX(-50%)', opacity: 0, height: 0})),
	    AnimationTransitions.BounceOut('300ms', 'show => hide', undefined, style({transform: 'translateX(50%)', opacity: 0, height: 0}))
	]);
}
