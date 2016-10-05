import angular from 'angular';
import 'angular-mocks';

import FindServer from '../src/findServer/index.js';

const { inject, module } = angular.mock;

describe("FindServerService", () => {
  let service;

  beforeEach(function () {
    module('FindServer');
  });

  beforeEach(inject(function (findServer) {
    service = findServer;
  }));

  it('should not be null',
    inject(() => {
      console.log(service.findServer);
      return expect(service).not.toBe(null)
    })
  );


  //
  // it('request',
  //   inject(($httpBackend) => {
  //     const urls = [
  //       {
  //         "url": "http://doesNotExist.boldtech.co",
  //         "priority": 1
  //       },
  //       {
  //         "url": "http://boldtech.co",
  //         "priority": 7
  //       },
  //       {
  //         "url": "http://offline.boldtech.co",
  //         "priority": 2
  //       },
  //       {
  //         "url": "http://boldcommunity.com",
  //         "priority": 4
  //       }
  //     ];
  //
  //     FindServerService.findServer(urls);
  //     $httpBackend.whenGET('/fake-url').respond(200, urls);
  //     $httpBackend.flush();
  //     // FindServerService.findServer(urls)
  //   })
  // );
});
