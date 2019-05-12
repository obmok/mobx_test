import EntitiesStore, {loadAllHelper, searchHelper}  from './entities-store'
import {action} from 'mobx'

class RepositoriesStore extends EntitiesStore {
    @action loadAll = loadAllHelper('repositories')
    @action search = searchHelper('repositories')
}

export default RepositoriesStore