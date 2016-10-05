export default class CardItemModalInstance {
  constructor(findServer) {
    'ngInject';
    this.findServer = findServer;
    this.jsonResult = '';
  }

  getResult() {
    this.findServer.findServer(this.json).then(response => {
      this.jsonResult = response;
    }, error => {
      this.jsonResult = 'error on load urls'
    });
  }

}
