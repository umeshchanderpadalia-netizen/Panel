const Booking = require("../models/Booking");

// GET ALL BOOKINGS
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.status(200).json(bookings);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch bookings",
    });
  }
};

// CREATE BOOKING
const createBooking = async (req, res) => {
  try {

    const booking = new Booking(req.body);

    await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to create booking",
    });
  }
};

module.exports = {
  getBookings,
  createBooking,
};