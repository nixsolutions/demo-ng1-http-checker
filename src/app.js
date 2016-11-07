import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './app.scss';

import ng from 'angular';

import DemoModule from './demo';
import FindServerModule from './findServer';

ng.module('app', [DemoModule, FindServerModule]);
