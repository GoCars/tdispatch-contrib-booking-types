const expect = require('chai').expect;
const td = require('../');

describe('filterByCanBeCancelled', () => {
  it('should return 1 booking incoming', () => {
    const bookings = [{status: 'incoming', pk: 123}];

    const filtered = td.filterByCanBeCancelled(bookings);

    expect(filtered).to.eql([
      {status: 'incoming', pk: 123}
    ]);
  });

  it('should return 0 bookings for arrived_waiting', () => {
    const bookings = [{status: 'arrived_waiting', pk: 123}];

    const filtered = td.filterByCanBeCancelled(bookings);

    expect(filtered).to.eql([]);
  });

  it('should return 1 bookings for draft', () => {
    const bookings = [{status: 'draft', pk: 123}];

    const filtered = td.filterByCanBeCancelled(bookings);

    expect(filtered).to.eql([{status: 'draft', pk: 123}]);
  });
});
