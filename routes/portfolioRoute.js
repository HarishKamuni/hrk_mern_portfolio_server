const router = require('express').Router();
const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} = require('../models/portfolioModels.js');

//get all portfolio data
router.get('/get-portfolio-data', async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      project: projects,
      course: courses,
      experience: experiences,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update Intro
router.post('/update-intro', async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: 'Intro updated successfully',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update About
router.post('/update-about', async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: 'About updated successfully',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add experiences
router.post('/add-experience', async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experience Added Successfully',
    });
  } catch (error) {
    res.status(500).send({ error, message: 'please fill all the fields' });
  }
});

//update Experience
router.post('/update-experience', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    console.log('experience', experience);
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experience Updated Successfully',
    });
  } catch (error) {
    res.status(550).send(error);
  }
});

//delete Experience
router.post('/delete-experience', async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experience Deleted Successfully',
    });
  } catch (error) {
    res.status(550).send(error);
  }
});

//add project
router.post('/add-project', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: 'Project Added Successfully',
    });
  } catch (error) {
    res.status(500).send({ error, message: 'please fill all the fields' });
  }
});

//update project
router.post('/update-project', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: project,
      success: true,
      message: 'Project Updated Successfully',
    });
  } catch (error) {
    res.status(550).send(error);
  }
});

//delete project
router.post('/delete-project', async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: 'Project Deleted Successfully',
    });
  } catch (error) {
    res.status(550).send(error);
  }
});

module.exports = router;
