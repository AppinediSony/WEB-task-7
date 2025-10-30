const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

async function fetchUserData() {
  userContainer.innerHTML = "Loading data...";
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Failed to load data. Please check your internet connection.</p>`;
    console.error("Error fetching data:", error);
  }
}

function displayUsers(users) {
  userContainer.innerHTML = "";
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(userCard);
  });
}

reloadBtn.addEventListener('click', fetchUserData);

// Initial fetch
fetchUserData();
