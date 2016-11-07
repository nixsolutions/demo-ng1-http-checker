import angular from 'angular';
import 'angular-mocks';

import FindServer from '../src/findServer/index.js';

const { inject, module } = angular.mock;

describe("FindServerService", () => {
  let service;
  const urls = [
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "http://boldtech.co",
      "priority": 7
    },
    {
      "url": "http://offline.boldtech.co",
      "priority": 2
    },
    {
      "url": "http://boldcommunity.com",
      "priority": 4
    }
  ];

  beforeEach(function () {
    module('FindServer');
  });

  beforeEach(inject(function (findServer) {
    service = findServer;
  }));

  it('should not be null',
    inject(() => {
      return expect(service).not.toBe(null)
    })
  );

  it('findServer method should return available url with lowest priority',

    inject($httpBackend => {

      $httpBackend.whenGET(urls[0].url).respond(199, {});
      $httpBackend.whenGET(urls[1].url).respond(200, {});
      $httpBackend.whenGET(urls[2].url).respond(250, {});
      $httpBackend.whenGET(urls[3].url).respond(300, {});
      service.findServer(urls).then(response => {
        expect(response.url).toBe(urls[2].url);
      });
      $httpBackend.flush();
    })
  );


  it('findServer method should throw error with message if all servers are unreachable',

    inject($httpBackend => {
      $httpBackend.whenGET(urls[0].url).respond(199, {});
      $httpBackend.whenGET(urls[1].url).respond(300, {});
      $httpBackend.whenGET(urls[2].url).respond(301, {});
      $httpBackend.whenGET(urls[3].url).respond(401, {});
      service.findServer(urls).catch(err => {
        expect(err.message).not.toBe(undefined);
      });
      $httpBackend.flush();
    })

  );
});
