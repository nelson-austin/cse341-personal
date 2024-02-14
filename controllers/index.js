const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const createBusiness = async (req, res) => {
    const business = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        website: req.body.website,
        phoneNumber: req.body.phoneNumber
    };
    const response = await mongodb.getDb().db('personal-project').collection('businesses').insertOne(business);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Unable to create business. Please try again later.');
    }
};


const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('personal-project').collection('businesses').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res, next) => {
    const businessId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('personal-project').collection('businesses').find({ _id: businessId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const updateBusiness = async (req, res) => {
    const businessId = new ObjectId(req.params.id);

    const business = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        website: req.body.website,
        phoneNumber: req.body.phoneNumber
    };
    const response = await mongodb.getDb().db('personal-project').collection('businesses').replaceOne({ _id: businessId }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Unable to update business. Please try again later.');
    }
};

const deleteBusiness = async (req, res) => {
    const businessId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('personal-project').collection('businesses').deleteOne({ _id: businessId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.error || 'Unable to delete business. Please try again later.')
    }
};

module.exports = { createBusiness, getAll, getSingle, updateBusiness, deleteBusiness };