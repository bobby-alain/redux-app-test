import { render, screen, fireEvent, wait } from '@testing-library/react';
import { getService, mock } from '../services/userService';
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

  it('should render GetUser component', () => {
    render(<GetUser />);
    expect(screen.getByRole('button')).not.toBeDisabled();
    expect(screen.getByText('Get User')).toBeInTheDocument();
  });

  it('should not render user name', () => {
    render(<GetUser />);
    expect(screen.queryByText(expectedUser.name)).not.toBeInTheDocument();
  });

  it('should render and fetch user name when button clicked', async () => {
    userServiceStub.getUserData.resolves(expectedUser);

    render(<GetUser />);
    fireEvent.click(screen.getByText('Get User'));
    await wait(() => {
      expect(screen.queryByText(expectedUser.name)).toBeInTheDocument();
    });
  });
});
