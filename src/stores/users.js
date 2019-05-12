import EntitiesStore, {loadAllHelper, searchHelper}  from './entities-store'
import {action} from 'mobx'

class UsersStore extends EntitiesStore {
    @action loadAll = loadAllHelper('users')
    @action search = searchHelper('users')
}

export default UsersStore