function calculateCircleArea(radius) {
    if (radius < 0) {
       throw new Error('Radius cannot be negative');
    }
    let area = Math.PI * Math.pow(radius, 2);
    return Number(area.toFixed(2));
   }