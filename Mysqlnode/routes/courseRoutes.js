const express = require('express');
const routes = express.Router();

const courseController = require('../controllers/courseController');


routes.post('/addCourse',courseController.addCourse)
routes.get('/getAllCourses',courseController.getCourses)
routes.get('/getCourseById/:id',courseController.getCourseById)




module.exports = routes