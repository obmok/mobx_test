import UsersStore from './users'
import RepositoriesStore from './repositories'

const stores = {}

stores.users = new UsersStore(stores)
stores.repositories = new RepositoriesStore(stores)

export default stores