// Display Date and Time
function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    const timeString = `${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`;
    const dateString = `${day}-${month}-${year}`;
  
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();
  
  function predictChild() {
    const momName = document.getElementById('momname').value.trim();
    const dadName = document.getElementById('dadname').value.trim();
    const predictionElement = document.getElementById('prediction');
    const childImage = document.getElementById('childImage');
  
    if (!momName || !dadName) {
      predictionElement.textContent = 'Please enter both Mom and Dad names.';
      childImage.style.display = 'none';
      return;
    }
  
    const combinedLength = momName.length + dadName.length;
  

    let prediction;
    if (combinedLength % 2 === 0) {
      prediction = {
        name: "Boy",
        img: 'images/boy.jpg' 
      };
    } else {
      prediction = {
        name: 'Girl',
        img: 'images/girl.jpg'
      };
    }
  
    // Update the prediction result
    predictionElement.textContent = `Predicted : ${prediction.name}`;
    childImage.src = prediction.img;
    childImage.style.display = 'block';
  }
  