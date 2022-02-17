export interface GameStatus {
    /** 
     * The game is scheduled to occur.
     */
    scheduled: string,
    /** 
     * The game has been created and we have begun logging information.
     */
    created: string,
    /** 
     * The game is in progress.
     */
    inprogress: string,
    /** 
     * The game is currently at halftime.
     */
    halftime: string,
    /** 
     * The game is over, but stat validation is not complete.
     */
    complete: string,
    /** 
     * The game is over and the stats have been validated.
     */
    closed: string,
    /** 
     * The game has been cancelled. No makeup game will be played as a result.
     */
    cancelled: string,
    /** 
     * The start of the game is currently delayed or the game has gone from in progress to delayed for some reason.
     */
    delayed: string,
    /** 
     * The game has been postponed, to be made up at another day and time. Once the makeup game is announced, a new game and ID will be created and scheduled on the announced makeup date. You should request the scheduled feed(s) regularly to identify the re-scheduled makeup game(s).
     */
    postponed: string,
    /** 
     * The game has been scheduled, but a time has yet to be announced.
     */
    'time-tbd': string,
    /** 
     * The game will be scheduled if it is required.
     */
    'if-necessary': string,
    /** 
     * The series game was scheduled to occur, but will not take place due to one team clinching the series early.
     */
    unnecessary: string,
}