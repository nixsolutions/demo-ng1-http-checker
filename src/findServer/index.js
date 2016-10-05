import ng from 'angular';
import FindServerService from './service';

let module = ng.module('FindServer', []);

module.service('findServer', FindServerService);

export default module.name;
