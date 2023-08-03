let score = 0;








function hide() {
  document.getElementById('rating-state-container').style.display = "none";

  document.getElementById('thank-you-state-container').style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  `;

  document.getElementById('graphic').style.marginBottom = "16px"

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
    margin-top: 26px;
    margin-bottom: 0;
  `
}