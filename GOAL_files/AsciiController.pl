:- dynamic drawn/1.                                                                                             :-
:- dynamic timer/2.
:- dynamic frame/1.
:- dynamic iteration/1.

% This is the amount of milliseconds between each frame
intervalOverlay(150).

% This is the total amount of frames.
totalDurationOverlay(250).

currentInterval(CurrentFrame, Multiple) :- interval(Interval), Multiple is div(CurrentFrame, Interval). 

