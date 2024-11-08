export const drawRect = (detections, ctx) => {

    detections.forEach(prediction => {
  
      const [x, y, width, height] = prediction['bbox']; 
      const text = prediction['class']; 
      // const color = Math.floor(Math.random()*16777215).toString(16);
      
      ctx.strokeStyle = '#FF0000'
      ctx.font = '18px Arial';
      ctx.beginPath();   
      ctx.fillStyle = '#FF0000'
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height); 
      ctx.stroke();
    });
  
  }