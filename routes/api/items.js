const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Items");

// @route   GET api/items
// @desc    Get All items
// @access  Public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public

router.post("/", (req, res) => {
  const newItem = new Item({
    type: req.body.type,
    description: req.body.description,
    value: req.body.value,
    note: req.body.note,
    date: req.body.date,
    amount: req.body.amount,
    createdAt: Date.now(),
  });

  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

// @route   DELETE api/items
// @desc    Delete an Item
// @access  Public

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   PUT api/items
// @desc    Update an Item
// @access  Public

router.put("/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
