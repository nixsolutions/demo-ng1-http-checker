export default class ResponseListService {

  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
  }

  findServer(urls) {
    urls = this.checkJSONvalid(urls);

    if (!urls) {
      return this.$q.reject();
    }

    return this.$q.all(urls.map(item => this.makeHttpPromise(item.url)))
      .then(data => {
        return data.reduce((data, item, index) => {
          if (item.status > 199 && item.status < 300) {
            data.push(urls[index]);
          }
        }, []);
      }).then(this.getLowestPriorityItem.bind(this));
  }

  makeHttpPromise(url) {
    return this.$q(resolve => {
      this.$http.get(url, {timeout: 5000, withCredentials: true}).then(resolve, resolve);
    });
  }

  getLowestPriorityItem(data) {
    const testResult = this.checkJSONvalid(data);

    if (!testResult && !testResult.length) {
      return '';
    }

    let returnData = testResult.sort((a, b) => a.priority - b.priority);

    return returnData[0];
  }

  checkJSONvalid(json) {
    let parsedJson;

    try {
      eval('parsedJson = ' + json);
    } catch (e) {
      parsedJson = false;
    }

    return Array.isArray(parsedJson) && parsedJson;
  }
}
