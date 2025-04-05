window.onload = async () => {
    const response = await fetch('http://localhost:8000');  // Adjust this based on your FastAPI endpoint
    const data = await response.json();
    document.getElementById('message').innerText = data.message || 'Failed to fetch data';
  };
  