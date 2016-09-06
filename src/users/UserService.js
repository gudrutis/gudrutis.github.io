(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Topic 1',
        avatar: 'svg-1',
        content: 'bla',
        view: '/'
      },
      {
        name: 'Topic 2',
        avatar: 'svg-2',
        content: 'blabla',
        view: '/tp2'
      },
      {
        name: 'Topic 3',
        avatar: 'svg-3',
        content: "Blabla bla",
        view: '/tp3'
      },
      {
        name: 'Topic 4',
        avatar: 'menu',
        content: 'blablabla',
        view: '/tp4'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
