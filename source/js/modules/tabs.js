document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-ticket-tab]');
  const tickets = document.querySelectorAll('[data-ticket]');

  if (tabs && tickets) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();

        removeActive(tabs);

        tab.classList.add('is-active');
        swicthTickets(tab.dataset.ticketTab, tickets);
      });
    });
  }
});

function removeActive(elements) {
  elements.forEach((el) => {
    el.classList.remove('is-active');
  });
}

function swicthTickets(data, tickets) {
  if (tickets) {
    tickets.forEach((tic) => {
      if (tic.dataset.ticket === data) {
        tic.classList.add('is-active');
      } else {
        tic.classList.remove('is-active');
      }
    });
  }
}
