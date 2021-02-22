import { UpperFirstPipe } from './upper-first.pipe';

describe('UpperFirstPipe', () => {
  let pipe: UpperFirstPipe;

  beforeEach(() => {
    pipe = new UpperFirstPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should uppercase the first letter', () => {
    const name = 'john';

    const result = pipe.transform(name);

    expect(result).toEqual('John');
  });
});
