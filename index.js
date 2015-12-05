var internals = {};

module.exports.types = internals.types = {
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

module.exports.filterByCanBeCancelled = internals.filterByCanBeCancelled = function(bookings){
	return bookings.filter(b => {
		return b.status === internals.types.INCOMING ||
			b.status === internals.types.DISPATCHED ||
			b.status === internals.types.CONFIRMED ||
			b.status === internals.ON_THE_WAY
	});
}

module.exports.filterByCannotBeCancelled = internals.filterByCannotBeCancelled = function(bookings){
	return bookings.filter(b => {
		return b.status === internals.types.ARRIVED_WAITING ||
			b.status === internals.types.PASSENGER_ON_BOARD ||
			b.status === internals.types.DROP ||
			b.status === internals.COMPLETED ||
			b.status === internals.CANCELLED
	});
}

module.exports.filterByType = internals.filterByType = function(bookings, type){
	return bookings.filter(b => b.status === type);
};
