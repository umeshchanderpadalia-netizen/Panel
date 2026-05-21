const express = require("express");

const {
  getBookings,
  createBooking,
} = require("../controllers/bookingController");

const router = express.Router();

// GET BOOKINGS
router.get("/", getBookings);

// CREATE BOOKING
router.post("/", createBooking);

module.exports = router;