const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
    },

    customer: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    pickup: {
      type: String,
      required: true,
    },

    drop: {
      type: String,
      required: true,
    },

    driver: {
      type: String,
      default: "",
    },

    vendor: {
      type: String,
      default: "",
    },

    vehicle: {
      type: String,
      default: "",
    },

    total: {
      type: Number,
      required: true,
    },

    totalExpenses: {
      type: Number,
      default: 0,
    },

    profit: {
      type: Number,
      default: 0,
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    tripStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);