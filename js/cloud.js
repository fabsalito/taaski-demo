var words = [
  {text: 'Family', weight: 0.7},
  {text: 'Work', weight: -0.58},
  {text: 'Project', weight: -0.45},
  {text: 'Travel', weight: -0.71},
  {text: 'Finance', weight: -0.76},
  {text: 'Course', weight: -0.34},
  {text: 'Programming', weight: -0.5},
  {text: 'School', weight: -0.12},
  {text: 'Clothes', weight: -0.23},
  {text: 'Home', weight: -0.32},
  {text: 'Purchase', weight: -0.67},
  {text: 'Payments', weight: -0.55},
  {text: 'Holidays', weight: -0.49}
];

$(function() {
  $("#container_clouds").jQCloud(words, {
    height: 275
  });
});