// Make a list of menu items
var tasks = [
  {
    title: "Today",
    subtitle: "Listed Tasks"
  },
  {
    title: "Tomorrow",
    subtitle: "Listed Tasks"
  },
  {
    title: "Completed",
    subtitle: "You Rock!"
  }
];

// Create the Menu, supplying the list of options
var UI = require('ui');
var reminderMenu = new UI.Menu ({
  sections: [{
    title: 'Reminder List',
    items: tasks
  }]
});

// Show the Menu
reminderMenu.show();

// Add a click listener for select button click
reminderMenu.on('select', function(event) {

  // Show a card with clicked item details
  var detailCard = new UI.Card({
    title: tasks[event.itemIndex].title,
    body: tasks[event.itemIndex].subtitle
  });

  // Show the new Card
  detailCard.show();
});
