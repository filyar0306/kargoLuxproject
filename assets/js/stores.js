let bestSeller = document.getElementById("best_seller");
let seeMore = document.getElementById("see-more");

const renderData = async () => {
  const res = await fetch(`http://localhost:3000/posts`);
  const data = await res.json();
  console.log(data);
  data.forEach((item) => {
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="theMarka">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4> 
    </div>
    <p><i class="fa-solid fa-tag"></i> ${item.price} TL</p>
    </a>
    `;
    bestSeller.append(myDiv);
  });
};

window.onload = () => {
  renderData();
};



// SearchByName
const serachInput = document.getElementById("serachInput");
const best_seller = document.getElementById("best_seller");

const searchByName = async (name) => {
  try {
    const res = await fetch(`http://localhost:3000/posts`);
    const data = await res.json();

    let filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    best_seller.innerHTML = "";

    filteredData.forEach((item) => {
      let card = document.createElement("div");
      card.className = "myDiv";
      card.innerHTML = `
      <a href="${item.link}" target="_blank">
      <img src="${item.image}" alt="${item.name}">
      <div class="theMarka">  
      <p>${item.marka}</p>
      <h4>${item.name}</h4>
      </div>
      <p>${item.price} TL</p>
      </a>
      `;
      best_seller.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

serachInput.addEventListener("input", (e) => {
  searchByName(e.target.value);
});



//Defacto Sort 
const defactoButton = document.getElementById("defacto");

defactoButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const defactoPosts = data.filter(item => item.marka === "DeFacto");

    defactoPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(defactoPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "myDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="theMarka">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p>${item.price} TL</p>
    </a>
    `;
    best_seller.appendChild(card);
  });
}

// Bershka Sort 
const bershkaButton = document.getElementById("bershka");

bershkaButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const bershkaPosts = data.filter(item => item.marka === "Bershka");

    bershkaPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(bershkaPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "myDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="theMarka">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p>${item.price} TL</p>
    </a>
    `;
    best_seller.appendChild(card);
  });
}

// Pull and Bear Sort 
const pullBearButton = document.getElementById("pullBear");

pullBearButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const pullBearPosts = data.filter(item => item.marka === "Pull & Bear");

    pullBearPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(pullBearPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "myDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="theMarka">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p>${item.price} TL</p>
    </a>
    `;
    best_seller.appendChild(card);
  });
}


// Stradivarius Sort 
const stradivariusButton = document.getElementById("stradivarius");

stradivariusButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const stradivariusPosts = data.filter(item => item.marka === "Stradivarius");

    stradivariusPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(stradivariusPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});

function renderPosts(posts) {
  best_seller.innerHTML = "";
  posts.forEach(item => {
    let card = document.createElement("div");
    card.className = "myDiv";
    card.innerHTML = `
    <a href="${item.link}" target="_blank">
    <img src="${item.image}" alt="${item.name}">
    <div class="theMarka">  
    <p>${item.marka}</p>
    <h4>${item.name}</h4>
    </div>
    <p>${item.price} TL</p>
    </a>
    `;
    best_seller.appendChild(card);
  });
}

//  Addax sort
const addaxButton = document.getElementById("addax");
addaxButton.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();

    const bershkaPosts = data.filter(item => item.marka === "Addax");

    bershkaPosts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    renderPosts(bershkaPosts);
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
});