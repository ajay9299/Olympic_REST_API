const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const postMensRecords = new MensRanking(req.body);
    console.log(postMensRecords);
    const data = await postMensRecords.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id });
    res.send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
