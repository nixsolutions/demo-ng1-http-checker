export default class FindServerService {

  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
  }

  /**
   * Method to get available url with lowest priority code
   * @param {Array} objects - Array of url objects {url, priority}
   * @return {Promise} - Promise<object> returns promise with object that has available url and lowest priority in resolve or error in reject
   * @example findServer([{url: 'http://google.com', priority: 1}, {url: 'http://amazon.com', prioroty: 2}])
   *  // {url: 'http://google.com', priority: 1}
   */
  findServer(urls) {

    if (!urls) {
      return this.$q.reject();
    }

    urls = urls.filter(item => item.url && item.priority);

    return this.$q.all(urls.map(item => this.makeHttpPromise(item.url)))
      .then(data => {
        return data.reduce((data, item, index) => {
          if (item.status > 199 && item.status < 300) {
            data.push(urls[index]);
          }
          return data;
        }, []);
      }).then(data => {
        return data ? FindServerService.getLowestPriorityItem(data) : this.$q.reject({
          message: 'There is no available servers'
        });
      });
  }

  makeHttpPromise(url) {
    return this.$q(resolve => {
      this.$http.get(url, {timeout: 5000, withCredentials: true}).then(resolve, resolve);
    });
  }

  static getLowestPriorityItem(data) {

    if (!data && !data.length) {
      return null;
    }

    const returnData = data.sort((a, b) => a.priority - b.priority);

    return returnData[0];
  }


}
