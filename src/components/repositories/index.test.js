import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Repositories from './index'
import Repository from './repository'
import { Provider } from 'mobx-react'
import Loader from '../loader'

Enzyme.configure({ adapter: new Adapter() });

describe('RepositoriesList component', function() {
  it('should render a repository component',function() {
    const container = shallow(<Provider><Repositories /></Provider>, {
      disableLifecycleMethods: true
    })
    expect(container.contains(<Repository />))
  })
  it('should render a loader',function() {
    const container = shallow(<Provider><Repositories /></Provider>, {
      disableLifecycleMethods: true
    })
    expect(container.contains(<Loader />))
  })
})