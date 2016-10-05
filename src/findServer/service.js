export default class FindServerService {

  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
  }

  /**
   * Method to get highest available url with lowest priority code
   * @param {Array} urls - Array of url objects {url, priority}
   * @return {Promise} - Promise which the return error string or lowest priority code url with success reponse code
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
        }, []);
      }).then(data => {
        return data ? FindServerService.getLowestPriorityItem(data) : this.$q.reject();
      });
  }

  makeHttpPromise(url) {
    return this.$q(resolve => {
      this.$http.get(url, {timeout: 5000, withCredentials: true}).then(resolve, resolve);
    });
  }

  static getLowestPriorityItem(data) {

    if (!data && !data.length) {
      return false;
    }

    const returnData = data.sort((a, b) => a.priority - b.priority);

    return returnData[0];
  }


}
