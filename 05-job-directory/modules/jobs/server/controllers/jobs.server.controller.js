'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Job = mongoose.model('Job'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a job
 */
exports.create = function (req, res) {
  var job = new Job(req.body);
  job.user = req.user;

  job.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(job);
    }
  });
};

/**
 * Show the current job
 */
exports.read = function (req, res) {
  res.json(req.job);
};

/**
 * Update a job
 */
exports.update = function (req, res) {
  var job = req.job;

  job.title = req.body.title;
  job.company = req.body.company;
  job.description = req.body.description;
  job.hourly_wage = req.body.hourly_wage;
  job.requirements = req.body.requirements;
  job.state = req.body.state;
  job.contact_email = req.body.contact_email;

  job.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(job);
    }
  });
};

/**
 * Delete a job
 */
exports.delete = function (req, res) {
  var job = req.job;

  job.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(job);
    }
  });
};

/**
 * List of Jobs
 */
exports.list = function (req, res) {
  Job.find().sort('-created').populate('user', 'displayName').exec(function (err, jobs) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(jobs);
    }
  });
};

/**
 * Job middleware
 */
exports.jobByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Job is invalid'
    });
  }

  Job.findById(id).populate('user', 'displayName').exec(function (err, job) {
    if (err) {
      return next(err);
    } else if (!job) {
      return res.status(404).send({
        message: 'No job with that identifier has been found'
      });
    }
    req.job = job;
    next();
  });
};
