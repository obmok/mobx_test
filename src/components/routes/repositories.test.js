import React from 'react'
import Enzyme, { shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RepositoriesPage from './repositories'
import RepositoriesList from '../repositories/index'
import { Provider } from 'mobx-react'

Enzyme.configure({ adapter: new Adapter() });

describe('RepositoriesPage component', function() {
  it('should render a repositories list',function() {
    const container = shallow(<Provider><RepositoriesPage /></Provider>, {
      disableLifecycleMethods: true
    })
    expect(container.contains(<RepositoriesList />))
  })
})