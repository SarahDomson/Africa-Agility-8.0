document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'bg-white p-4 rounded-md shadow mb-3';
    reviewDiv.innerHTML = `<strong>${name}</strong> - Rating: ${rating} <br><p>${comment}</p>`;
    
    document.getElementById('review-list').appendChild(reviewDiv);
    this.reset();
  });