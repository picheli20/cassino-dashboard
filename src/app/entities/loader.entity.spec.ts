import { Loader } from './loader.entity';

describe('Loader Entity', () => {

  it('should be initialized', () => {
    expect(Loader.isLoading()).toBeFalsy();
  });

  it('should add the loading', () => {
    Loader.add();
    expect(Loader.isLoading()).toBeTruthy();
    Loader.remove();
  });

  it('should be always positive', () => {
    Loader.remove();
    Loader.remove();
    Loader.remove();
    expect(Loader.isLoading()).toBeFalsy();
    Loader.add();
    expect(Loader.isLoading()).toBeTruthy();
    Loader.remove();
    expect(Loader.isLoading()).toBeFalsy();
  });
});
