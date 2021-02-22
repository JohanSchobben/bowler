import {Turn} from '../models/turn';

export function isTurnDone(turn: Turn | undefined, index: number): boolean {
  const firstThrow = turn?.firstThrow;
  const secondThrow = turn?.secondThrow;
  const thirdThrow = turn?.thirdThrow;
  const hasThirdThrow = index === 10 && (turnIsStrike(turn) || turnIsSpare(turn));

  if(!turn) {
    return true;
  }

  if (hasThirdThrow) {
    return thirdThrow !== undefined;
  }

  return firstThrow === 10 || secondThrow !== undefined;
}


export function addThrowToTurns(turns: Turn[], amount: number): Turn[] {
  const lastTurn = turns[turns.length - 1];

  if (!lastTurn || isTurnDone(lastTurn, turns.length)) {
    const newTurn = {firstThrow: amount};
    turns.push(newTurn);
  } else if (turns.length === 10) {
    if (!lastTurn.secondThrow) {
      lastTurn.secondThrow = amount;
    } else if (!lastTurn.thirdThrow) {
      lastTurn.thirdThrow = amount;
    }
  } else {
    lastTurn.secondThrow = amount;
  }

  return turns;
}

export function turnIsStrike(turn: Turn): boolean {
  return turn?.firstThrow === 10;
}

export function turnIsSpare(turn: Turn): boolean {
  return turn?.firstThrow + turn?.secondThrow === 10;
}
