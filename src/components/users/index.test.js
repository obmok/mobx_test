import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Users from './index'
import User from './user'
import { Provider } from 'mobx-react'
import Loader from '../loader'

Enzyme.configure({ adapter: new Adapter() });

describe('UsersList component', function() {
  it('should render a user component',function() {
    const container = shallow(<Provider><Users /></Provider>, {
      disableLifecycleMethods: true
    })
    expect(container.contains(<User />))
  })
  it('should render a loader',function() {
    const container = shallow(<Provider><Users /></Provider>, {
      disableLifecycleMethods: true
    })
    expect(container.contains(<Loader />))
  })
})