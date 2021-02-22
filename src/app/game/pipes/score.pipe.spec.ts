import { ScorePipe } from './score.pipe';
import {Turn} from '../models/turn';

describe('ScorePipe', () => {
  let pipe: ScorePipe;

  beforeEach(() => {
    pipe = new ScorePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string when the index is not yet thrown', () => {
    const turnIndex = 10;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 4},
      {firstThrow: 2, secondThrow: 1},
      {firstThrow: 4, secondThrow: 4},
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('');
  });

  it('should not add turns that are after the given index', () => {
    const turnIndex = 1;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 3},
      {firstThrow: 2, secondThrow: 1},
      {firstThrow: 4, secondThrow: 4},
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('11');
  });

  it('should add the first and second throw of the next turn if the current turn is a strike', () => {
    const turnIndex = 1;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 3},
      {firstThrow: 10},
      {firstThrow: 4, secondThrow: 4},
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('26');
  });

  it('should add the first throw of the second next throw if the current throws is a strike and the next throw is also a strike', () => {
    const turnIndex = 1;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 3},
      {firstThrow: 10},
      {firstThrow: 10},
      {firstThrow: 7}
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('35');
  });

  it('should not show a score if the next throw is not yet thrown', () => {
    const turnIndex = 1;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 3},
      {firstThrow: 10},
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('');
  });

  it('should not show a score if the second next throw is not yet thrown', () => {
    const turnIndex = 1;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 3},
      {firstThrow: 10},
      {firstThrow: 7}
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('');
  });

  it('should add the first throw of the next turn if then next turn is a spare', () => {
    const turnIndex = 1;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 3},
      {firstThrow: 9, secondThrow: 1},
      {firstThrow: 7}
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('25');
  });

  it('should not show a score if the current throw is a spare and the next throws is not yet thrown', () => {
    const turnIndex = 1;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 3},
      {firstThrow: 9, secondThrow: 1},
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('');
  });

  it('should sum all the values when no strikes or spares', () => {
    const turnIndex = 2;
    const turns: Turn[] = [
      {firstThrow: 5, secondThrow: 4},
      {firstThrow: 2, secondThrow: 1},
      {firstThrow: 4, secondThrow: 4},
    ];

    const result = pipe.transform(turns, turnIndex);
    expect(result).toEqual('20');
  });
});
