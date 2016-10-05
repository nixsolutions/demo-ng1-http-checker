import './response-list.less';

import ng from 'angular';

import ResponseListComponent from './components';
import ResponseListService from './services';

export default ng.module('app.components.ResponseList', [])
  .service('ResponseService', ResponseListService)
  .directive('responseList', ResponseListComponent)
  .name;
