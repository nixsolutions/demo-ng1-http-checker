import ng from 'angular';

import ResponseListComponent from './components';

export default ng.module('app.components.ResponseList', [])
  .component('responseList', ResponseListComponent)
  .name;
