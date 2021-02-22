import {addThrowToTurns, isTurnDone, turnIsSpare, turnIsStrike} from './turn.helper';
import {Turn} from '../models/turn';

describe('isTurnDone', () => {
  it('should return true if the first value is a strike and it is not the tenth throw', () => {
    const index = 1;
    const turn = {
      firstThrow: 10
    };

    const result = isTurnDone(turn, index);

    expect(result).toBeTruthy();
  });

  it('should return true if the first value and the second value is defined and it is not the tenth throw', () => {
    const index = 1;
    const turn = {
      firstThrow: 1,
      secondThrow: 3
    };

    const result = isTurnDone(turn, index);

    expect(result).toBeTruthy();
  });

  it('should return false if it is the tenth turn and a spare is thrown', () => {
    const index = 10;
    const turn = {
      firstThrow: 1,
      secondThrow: 9
    };

    const result = isTurnDone(turn, index);

    expect(result).toBeFalsy();
  });

  it('should return false if it is the tenth turn and the value of the first is strike', () => {
    const index = 10;
    const turn = {
      firstThrow: 10,
      secondThrow: 9
    };

    const result = isTurnDone(turn, index);

    expect(result).toBeFalsy();
  });

  it('should return true if the it is the tenth turn and there are 2 throws with no strike or spare', () => {
    const index = 10;
    const turn = {
      firstThrow: 3,
      secondThrow: 2
    };

    const result = isTurnDone(turn, index);

    expect(result).toBeTruthy();
  });
});

describe('turnIsStrike', () => {
  it('should return true if the first Throw has a value of 10', () => {
    const turn = {firstThrow: 10};

    const result = turnIsStrike(turn);

    expect(result).toBeTruthy();
  });

  it('should return false if the first Throw has a value lower then 10', () => {
    const turn = {firstThrow: 1};

    const result = turnIsStrike(turn);

    expect(result).toBeFalsy();
  });
});

describe('turnIsSpare', () => {
  it('should return false if two turns do not add up to ten' , () => {
    const turn = {firstThrow: 1, secondThrow: 2};

    const result = turnIsSpare(turn);

    expect(result).toBeFalsy();
  });

  it('should return true if the first and second throw add up to ten', () => {
    const turn = {firstThrow: 1, secondThrow: 9};

    const result = turnIsSpare(turn);

    expect(result).toBeTruthy();
  });

  it('should return false if the turn is a strike', () => {
    const turn = {firstThrow: 10};

    const result = turnIsSpare(turn);

    expect(result).toBeFalsy();
  });

  it('should return false if the second throw is not yet thrown', () => {
    const turn = {firstThrow: 1};

    const result = turnIsStrike(turn);

    expect(result).toBeFalsy();
  });
});

fdescribe('addThrowToTurns', () => {
  it('should add the throw if it is the first throw', () => {
    const turns: Turn[] = [];

    const result = addThrowToTurns(turns, 4);

    expect(result.length).toEqual(1);
  });

  it('should add the throw if it is the first is done', () => {
    const turns: Turn[] = [
      {firstThrow: 2, secondThrow: 1}
    ];

    const result = addThrowToTurns(turns, 4);

    expect(result.length).toEqual(2);
  });

  it('should add the throw to the last turn if the turn is not yet done', () => {
    const turns: Turn[] = [
      {firstThrow: 2}
    ];

    const result = addThrowToTurns(turns, 4);

    expect(result.length).toEqual(1);
  });

  it('should add the throw as third throw is it is turn ten and the previous is a spare', () => {
    const turns: Turn[] = [
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 8}
    ];

    const result = addThrowToTurns(turns, 4);

    expect(result[9].thirdThrow).toEqual(4);
  });

  it('should add the throw as third throw is it is turn ten and the previous is a strike and something else', () => {
    const turns: Turn[] = [
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 10, secondThrow: 8}
    ];

    const result = addThrowToTurns(turns, 4);

    expect(result[9].thirdThrow).toEqual(4);
  });
});
