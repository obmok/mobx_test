import {observable, computed, action, toJS} from 'mobx'
import BasicStore from './basic-store'
import api from '../services/api'
import parse from 'parse-link-header'

class EntitiesStore extends BasicStore {
    @observable loading = false;
    @observable loaded = false;

    @observable entities = {};
    @observable links = {};
    mode = 0; // 0 - view, 1 - search

    @computed get list() {
      return toJS(this.entities);
    }

    @computed get size() {
      return this.list.length;
    }

    @action loadResultsPage(url) {
      this.loading = true;
      api.fetchResultsPage(url)
        .then(action(result => {;
            this.entities = this.mode ? result.data.items : result.data;
            this.links = result.headers.link ? parse(result.headers.link) : {};
            this.links.first.url = this.links.first.url.replace('{?since}','?since=1')
            this.loading = false;
            this.loaded = true;
        }));
    }
}

export function loadAllHelper(refName) {
    return action(function (criteria) {
        this.loading = true;
        api.fetchAllByEntityName(refName, criteria)
            .then(action(result => {
                this.mode = 0;
                this.entities = result.data;
                this.links = result.headers.link ? parse(result.headers.link) : {};
                this.links.first = null;
                this.loading = false;
                this.loaded = true;
            }));
    });
}

export function searchHelper(refName) {
  return action(function (criteria) {
      this.loading = true;
      api.fetchSearchResults(refName, criteria)
          .then(action(result => {
              this.mode = 1;
              this.entities = result.data.items;
              this.links = result.headers.link ? parse(result.headers.link) : {};
              this.loading = false;
              this.loaded = true;
          }));
  });
}

export default EntitiesStore 