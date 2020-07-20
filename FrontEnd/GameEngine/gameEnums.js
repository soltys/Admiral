export const CombatResult = {
    DEFENDER_AND_ATTACKER_LOSE: 0,
    ATTACKER_WINS: 1,
    DEFENDER_WINS: -1
  },
  GameState = {
    NOT_STARTED: 0,
    STARTED: 1,
    WAITING: 2,
    TURN: 3,
    ENDED: 4
  },
  CellType = {
    PLAYER_ONE_PORT: 1,
    PLAYER_TWO_PORT: 2,
    PLAYER_ONE_ENTRANCE: 3,
    PLAYER_TWO_ENTRANCE: 4,
    PLAYER_ONE_BATTERY: 5,
    PLAYER_TWO_BATTERY: 6,
    NEUTRAL: 7,
    SEA: 0,
    HIDDEN: 666
  },
  PawnType = {
    ENEMY: 99,
    BATTLESHIP: 1,
    MISSILE: 2,
    CRUISER: 3,
    DESTROYER: 4,
    SUBMARINE: 5,
    ESCORT: 6,
    MINESWEEPER: 7,
    LANDINGSHIP: 8,
    BATTERY: 9,
    MINE: 10
  },
  HistoryType = {
    PLAYER_JOINS: 1,
    PLAYER_LEAVES: 2,
    GAME_STARTED: 10,
    GAME_STOPPED: 11,
    GAME_CREATED: 20,
    GAME_DESTOYED: 21
  }
