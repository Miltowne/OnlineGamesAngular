export interface GameSession {
    sessId: string,
    players: string[],
    state: string,       // X X O E X O O O O
    turn: string
}