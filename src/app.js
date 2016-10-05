import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './app.scss';
import ngMockE2E from 'angular-mocks/ngMockE2E';

import ng from 'angular';

import DemoModule from './demo';
import FindServerModule from './findServer';

ng.module('app', [DemoModule, FindServerModule, ngMockE2E]);
