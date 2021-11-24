import sinon from 'sinon';
import { getService as getUserService, mock } from '../services/userService';
import { getStore } from '../redux/store';
import * as actions from '../redux/userFeature/actions';

//test: it should fetch user and set to state

// test: does user have token or not. fake service to fail. Check user is null
describe('User test', () => {
  let store;
  let userServiceStub;

  beforeEach(() => {
    sinon.restore();
    store = getStore();
    userServiceStub = sinon.stub(getUserService());
    mock(userServiceStub);
  });

  test('service should return user when loadUserData is called with id', async () => {
    await store.dispatch(actions.loadUserData('1'));

    expect(userServiceStub.getUserData.callCount).toBe(1);
    expect(userServiceStub.getUserData.getCall(0).args[0]).toBe('1');
  });

  test('should send correct argument to get user data', async () => {
    await store.dispatch(actions.loadUserData('1'));
    expect(userServiceStub.getUserData.withArgs('1').callCount).toBe(1);
  });

  // test('should call service with correct user id when deleting user', async () => {
  //   await store.dispatch(actions.deleteUserData('1'));
  //   expect(userServiceStub.deleteUser.withArgs('1').callCount).toBe(1);
  // });

  it('should return user null at first', () => {
    userServiceStub.getUserData.returns(null);
    expect(store.getState().userReducer.userData).toBe(null);
  });

  test('should set user to state after the user is fetched', async () => {
    userServiceStub.getUserData.resolves({ name: 'Leanne Graham' });
    await store.dispatch(actions.loadUserData('1'));

    expect(store.getState().userReducer.userData.name).toStrictEqual(
      'Leanne Graham'
    );
  });
});
