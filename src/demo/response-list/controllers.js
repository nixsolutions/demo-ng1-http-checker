export default class CardItemModalInstance {
  constructor(findServer) {
    'ngInject';
    this.findServer = findServer;
    this.jsonResult = '';
    this.dataIsCorrect = false;
  }

  getResult() {
    let data = this.convertTextToArray(this.text);

    this.findServer.findServer(data).then(response => {
      this.jsonResult = response;
    }, error => {
      this.jsonResult = error.message;
    });
  }

  checkCorrectData() {
    this.dataIsCorrect = this.convertTextToArray(this.text);
  }

  convertTextToArray(text) {
    let parsedJson;
    try {
      eval('parsedJson = ' + text);
    } catch (e) {
      parsedJson = false;
    }

    return Array.isArray(parsedJson) && parsedJson;
  }

}
