import template from './response-list-template.html';
import controller from './controllers';

export default () => ({
  template,
  controller,
  restrict: 'E',
  replace: true,
  controllerAs: 'RListCtrl',
  bindToController: true
});
