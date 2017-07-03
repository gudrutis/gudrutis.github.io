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
        name: 'personal info',
        avatar: 'personal',
        content: 'bla',
        view: '/'
      },
      {
        name: 'working experience',
        avatar: 'work',
        content: 'blabla',
        view: '/experience'
      },
      {
        name: 'portfolio',
        avatar: 'portfolio',
        content: "Blabla bla",
        view: '/portfolio'
      }
      // {
      //   name: 'Reasons to consider',
      //   avatar: 'menu',
      //   content: 'blablabla',
      //   view: '/why'
      // }
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
