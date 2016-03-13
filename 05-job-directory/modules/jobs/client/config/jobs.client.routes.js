'use strict';

// Setting up route
angular.module('jobs').config(['$stateProvider',
  function ($stateProvider) {
    // Jobs state routing
    $stateProvider
      .state('jobs', {
        abstract: true,
        url: '/jobs',
        template: '<ui-view/>'
      })
      .state('jobs.list', {
        url: '',
        templateUrl: 'modules/jobs/client/views/list-jobs.client.view.html'
      })
      .state('jobs.create', {
        url: '/create',
        templateUrl: 'modules/jobs/client/views/create-job.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('jobs.view', {
        url: '/:jobId',
        templateUrl: 'modules/jobs/client/views/view-job.client.view.html'
      })
      .state('jobs.edit', {
        url: '/:jobId/edit',
        templateUrl: 'modules/jobs/client/views/edit-job.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
