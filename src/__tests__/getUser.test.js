import { render, screen, fireEvent, wait } from '@testing-library/react';
import { getService, mock } from '../services/userService';
import { addTwoNumbers } from '../helper/fetchUser';
import GetUser from '../components/GetUser';
import sinon from 'sinon';

describe('fetch user', () => {
  let userServiceStub;
  const expectedUser = { name: 'Ervin Howell' };

  beforeEach(() => {
    sinon.restore();
    userServiceStub = sinon.stub(getService());
    mock(userServiceStub);
  });

  // call getUserFromFetchUserFile is a function that returns a user id
  // it('should get user from getUserFromFetchUserFile', async () => {
  //   const expectedUser = { name: 'Ervin Howell' };
  //   userServiceStub.getUserFromFetchUserFile.returns(expectedUser.name);
  // });

  it('should render GetUser component', () => {
    render(<GetUser />);
    expect(screen.queryByText('Get User')).toBeInTheDocument();
  });

  it('should not render user name', () => {
    render(<GetUser />);
    expect(screen.queryByText(expectedUser.name)).not.toBeInTheDocument();
  });

  it('should render and fetch user name when button clicked', async () => {
    render(<GetUser />);
    fireEvent.click(screen.getByText('Get User'));
    await wait(() => {
      expect(screen.queryByText(expectedUser.name)).toBeInTheDocument();
    });
  });
});

// mock function with sinon
describe('Add number together ', () => {
  let myStub;
  let mySpy;
  beforeEach(() => {
    sinon.restore();
    myStub = sinon.stub(addTwoNumbers());
    mySpy = sinon.spy(addTwoNumbers);
  });

  it('should call addTwoNumbers once', () => {
    mySpy(2, 2);
    expect(mySpy.callCount).toEqual(1);
  });

  it('should make different calls ', () => {
    // we can add more calls to return different values/outputs
    myStub.onFirstCall(0).returns(2);
    myStub.onSecondCall(1).returns(3);
    expect(myStub(2, 2)).toEqual(2);
    expect(myStub(2, 3)).toEqual(3);
  });

  it('should return sum of two numbers with correct argument', () => {
    myStub.withArgs(2, 2).returns(4);
    myStub.withArgs(2, 3).returns(5);
    expect(myStub(2, 2)).toEqual(4);
    expect(myStub(2, 3)).toEqual(5);
  });
});
