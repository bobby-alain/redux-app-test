import { getStore } from '../state/store';
import * as actions from '../state/counterFeature/actions';

describe('incremental test', () => {
  let store;
  beforeEach(() => {
    store = getStore();
  });
  it('should increase number to 100', () => {
    store.dispatch(actions.depositMony(100));
    expect(store.getState().account).toBe(100);
  });
  it('should increase number to 100 again', () => {
    store.dispatch(actions.depositMony(100));
    expect(store.getState().account).toBe(100);
  });
});
