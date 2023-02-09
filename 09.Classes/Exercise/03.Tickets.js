function managingTicketsData(tickets, sortCriteria) {
  class TicketSorter {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const result = [];

  tickets.map((el) => {
    let [destination, price, status] = el.split('|');
    price = Number(price);
    result.push(new TicketSorter(destination, price, status));
  });

  switch (sortCriteria) {
    case 'destination':
      result.sort((a, b) => a.destination.localeCompare(b.destination));
      break;
    case 'price':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'status':
      result.sort((a, b) => a.status.localeCompare(b.status));
      break;
  }
  return result;
}
managingTicketsData(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'status'
);
