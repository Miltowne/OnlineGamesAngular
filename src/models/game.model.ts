interface GameSession {
    sessId: string,
    players: User[],
    state: string[9] 
}

/*
    ['X', 'E', 'E',
     'X', 'O', 'E',
     'O', 'E', 'E']
*/
