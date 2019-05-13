import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UsersPage from './users'
import UsersList from '../users/index'
import { Provider } from 'mobx-react'

Enzyme.configure({ adapter: new Adapter() });

describe('UsersPage component', function() {
  it('should render a users list',function() {
    const container = shallow(<Provider><UsersPage /></Provider>, {
      disableLifecycleMethods: true
    })
    expect(container.contains(<UsersList />))
  })
})