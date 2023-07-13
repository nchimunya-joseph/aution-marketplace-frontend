// Function to handle bid submission
function handleBidSubmission(event) {
    event.preventDefault();
    
    const bidAmountInput = document.getElementById('bid-amount');
    const bidAmount = parseFloat(bidAmountInput.value);
    
    // Perform validation on bid amount if needed
    
    // Submit bid to the server via API or perform necessary actions
    
    // Clear bid amount input
    bidAmountInput.value = '';
    
    // Update bid history with the new bid
    const bidHistory = document.getElementById('bid-history');
    const bidderName = 'Bidder'; // Replace with actual bidder name
    const bidItem = document.createElement('li');
    bidItem.textContent = `${bidderName}: $${bidAmount.toFixed(2)}`;
    bidHistory.appendChild(bidItem);
  }
  
  // Add event listener to bid form submission
  const bidForm = document.getElementById('bid-form');
  bidForm.addEventListener('submit', handleBidSubmission);
  