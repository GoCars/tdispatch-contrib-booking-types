const internals = {};

module.exports.types = internals.types = {
  DRAFT: 'draft',
  INCOMING: 'incoming',
  DISPATCHED: 'dispatched',
  CONFIRMED: 'confirmed',

  ON_THE_WAY: 'on_way_to_job',
  ARRIVED_WAITING: 'arrived_waiting',

  PASSENGER_ON_BOARD: 'passenger_on_board',

  DROP: 'drop',
  COMPLETED: 'completed',

  CANCELLED: 'cancelled'
};

module.exports.readableStatuses = internals.readableStatuses = {
  'draft': 'your booking is currently being processed',
  'incoming': 'your booking is currently being processed',
  'dispatched': 'your booking is currently being assigned to a driver',
  'on_way_to_job': 'your driver is on the way',
  'arrived_waiting': 'your driver is outside and waiting',
  'passenger_on_board': 'the passenger is on board',
  'drop': 'the passenger has been dropped off',
  'completed': 'the booking has been completed',
  'cancelled': 'the booking has been cancelled'
};

module.exports.filterByCanBeCancelled = internals.filterByCanBeCancelled = (bookings) => {
  return bookings.filter(b => { return internals.canBeCancelled(b.status); });
};

module.exports.canBeCancelled = internals.canBeCancelled = (status) => {
  return status === internals.types.INCOMING ||
    status === internals.types.DRAFT ||
    status === internals.types.DISPATCHED ||
    status === internals.types.CONFIRMED ||
    status === internals.types.ON_THE_WAY;
};

module.exports.canBeCancelledRegex = /(completed|incoming|cancelled|on_way_to_job|arrived_waiting)/;

module.exports.filterByCannotBeCancelled = internals.filterByCannotBeCancelled = (bookings) => {
  return bookings.filter(b => {
    return b.status === internals.types.ARRIVED_WAITING ||
      b.status === internals.types.PASSENGER_ON_BOARD ||
      b.status === internals.types.DROP ||
      b.status === internals.COMPLETED ||
      b.status === internals.CANCELLED;
  });
};

module.exports.filterByType = internals.filterByType = (bookings, type) => {
  return bookings.filter(b => b.status === type);
};

module.exports.readableStatus = internals.readableStatus = (status) => {
  const readableStatus = internals.readableStatuses[status];
  if (!readableStatus) {
    return '';
  }

  return readableStatus;
};
