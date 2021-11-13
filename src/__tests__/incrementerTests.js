import { getStore } from '../redux/store';
import * as actions from '../redux/counterFeature/actions';
import sinon from 'sinon';

describe('incremental test', () => {
  let store;

  beforeEach(() => {
    sinon.restore();
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
