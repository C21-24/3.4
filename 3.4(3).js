function displayCurrentDate() {
    let currentDate = new Date();
    let day = currentDate.getDate().toString().padStart(2, '0');
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let year = currentDate.getFullYear().toString().padStart(4, '0');
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
    console.log(formattedDate);
   }