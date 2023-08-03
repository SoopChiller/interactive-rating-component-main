let score = 0;

function hide() {
  document.getElementById('rating-state-container').style.display = "none";

  document.getElementById('thank-you-state-container').style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  `;

  document.getElementById('graphic').style.marginBottom = "36px";

  document.getElementById('rating-display-container').style.cssText = `
    background: hsla(196, 11%, 52%, 0.1);
    border-radius: 20px;
   
  `

  document.getElementById('rating-display').style.cssText = `
    font-weight: bold;
    color:  hsl(25, 97%, 53%);
    padding: 10px 20px 6px 20px;
    
  `

  document.getElementById('number').textContent = `${score}`

  document.getElementById('thanks').style.cssText = `
    font-size: 27px;
    font-weight: bold;
    color: hsl(0, 0%, 100%);
    
  `

  document.getElementById('support').style.cssText = `
    text-align: center;
    color:  hsl(217, 12%, 63%);
    line-height: 24px;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 16px
  `

  document.getElementById('footer').style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 36px;
  `
}