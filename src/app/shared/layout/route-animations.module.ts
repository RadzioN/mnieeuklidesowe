import {
    trigger,
    transition,
    style,
    query,
    animate,
} from '@angular/animations';

export const fader =
    trigger('routeAnimations', [
        transition('1 <=> 2', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    width: '100%',
                    opacity: 0,
                }),
            ]),
            query(':enter', [
                animate('0.3s',
                    style({
                        opacity: 1,
                    }),
                ),
            ]),
        ]),
    ]);