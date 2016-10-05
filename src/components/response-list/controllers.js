export default class CardItemModalInstance {
  constructor(ResponseService) {
    'ngInject';
    this.responseService = ResponseService;
    this.jsonResult = '';
  }

  getResult() {
    this.responseService.findServer(this.json).then(response => {
      this.jsonResult = response;
    }, error => {
      this.jsonResult = 'error on load urls'
    });
  }

}
