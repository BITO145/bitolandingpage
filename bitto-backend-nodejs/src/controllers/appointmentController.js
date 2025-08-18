const Appointment = require('../models/Appointment');

// Create new appointment
const createAppointment = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      selectedLeader,
      leaderName,
      leaderRole,
      date,
      time,
      purpose,
      customPurpose,
      message
    } = req.body;

    // Check if the time slot is already booked
    const existingAppointment = await Appointment.findOne({
      selectedLeader,
      date: new Date(date),
      time,
      status: { $in: ['pending', 'confirmed'] }
    });

    if (existingAppointment) {
      return res.status(400).json({
        status: false,
        message: 'This time slot is already booked. Please select a different time.',
        data: null
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      name,
      email,
      phone,
      selectedLeader,
      leaderName,
      leaderRole,
      date: new Date(date),
      time,
      purpose,
      customPurpose,
      message
    });

    await appointment.save();

    res.status(201).json({
      status: true,
      message: 'Appointment request submitted successfully!',
      data: appointment
    });

  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to create appointment',
      data: null
    });
  }
};

// Get all appointments (admin only, no limit)
const getAllAppointments = async (req, res) => {
  try {
    const { status, leader } = req.query;
    
    const filter = {};
    if (status) filter.status = status;
    if (leader) filter.selectedLeader = leader;

    // Fetch all appointments without pagination
    const appointments = await Appointment.find(filter)
      .sort({ createdAt: -1 })
      .exec();

    res.json({
      status: true,
      message: 'Appointments retrieved successfully',
      data: {
        appointments,
        totalCount: appointments.length
      }
    });

  } catch (error) {
    console.error('Error getting appointments:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve appointments',
      data: null
    });
  }
};

// Get appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    
    if (!appointment) {
      return res.status(404).json({
        status: false,
        message: 'Appointment not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Appointment retrieved successfully',
      data: appointment
    });

  } catch (error) {
    console.error('Error getting appointment:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve appointment',
      data: null
    });
  }
};

// Update appointment status (admin only)
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status, adminNotes } = req.body;
    
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        adminNotes,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({
        status: false,
        message: 'Appointment not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Appointment status updated successfully',
      data: appointment
    });

  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to update appointment status',
      data: null
    });
  }
};

// Delete appointment (admin only)
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    
    if (!appointment) {
      return res.status(404).json({
        status: false,
        message: 'Appointment not found',
        data: null
      });
    }

    res.json({
      status: true,
      message: 'Appointment deleted successfully',
      data: null
    });

  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to delete appointment',
      data: null
    });
  }
};

// Get available time slots for a leader on a specific date
const getAvailableTimeSlots = async (req, res) => {
  try {
    const { leaderId, date } = req.query;
    
    if (!leaderId || !date) {
      return res.status(400).json({
        status: false,
        message: 'Leader ID and date are required',
        data: null
      });
    }

    // Get booked time slots for the leader on the specified date
    const bookedSlots = await Appointment.find({
      selectedLeader: leaderId,
      date: new Date(date),
      status: { $in: ['pending', 'confirmed'] }
    }).select('time');

    // Define available time slots (9 AM to 5 PM, 1-hour intervals)
    const allTimeSlots = [
      '09:00', '10:00', '11:00', '12:00', 
      '13:00', '14:00', '15:00', '16:00', '17:00'
    ];

    const bookedTimes = bookedSlots.map(slot => slot.time);
    const availableSlots = allTimeSlots.filter(slot => !bookedTimes.includes(slot));

    res.json({
      status: true,
      message: 'Available time slots retrieved successfully',
      data: {
        availableSlots,
        bookedSlots: bookedTimes
      }
    });

  } catch (error) {
    console.error('Error getting available time slots:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve available time slots',
      data: null
    });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
  getAvailableTimeSlots
};