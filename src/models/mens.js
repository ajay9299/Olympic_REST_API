const express = require("express");
const Mongoose = require("mongoose");

const menSchema = new Mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },

  dob: {
    type: Date,
    required: true,
    trim: true,
  },

  country: {
    type: String,
    required: true,
    trim: true,
  },

  score: {
    type: Number,
    required: true,
    trim: true,
  },

  event: {
    type: String,
    default: "100m",
  },
});

// new Mongoose.Collection
const MensRanking = new Mongoose.model("MenRanking", menSchema);

module.exports = MensRanking;
