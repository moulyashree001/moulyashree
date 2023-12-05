//javascript
const form = document.querySelector('form');
const plantList = document.getElementById('plantList');

form.addEventListener('submit', function(event) {
 event.preventDefault();

  const plantName = document.getElementById('plantName').value;
  const wateringSchedule = document.getElementById('wateringSchedule').value;
  const growthTracking = document.getElementById('growthTracking').value;

  const listItem = document.createElement('li');
  listItem.textContent = `Plant Name: ${plantName}, Watering Schedule: ${wateringSchedule}, Growth Tracking: ${growthTracking} inches`;

  plantList.appendChild(listItem);

  form.reset();
});