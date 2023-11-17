const freelancers = [
  { name: "Jenny S.", occupation: "programmer", price: 180 },
  { name: "Peter M.", occupation: "programmer", price: 135 },
  { name: "Dr. Funke", occupation: "Therapist", price: 105 },
  { name: "Alice P.", occupation: "teacher", price: 65},
  { name: "Charles Twitt esq.", occupation: "Lawyer", price: 99 },
  { name: "Abe Froman", occupation: "Sausage King", price: 250 },
  { name: "Ernie McCracken", occupation: "Life Coach", price: 200 },
  { name: "Luigi", occupation: "Plumber", price: 55 },
];
const maxLength = 8;
const availableFreelancers = [];

const addFreelancer = () => {
  if(availableFreelancers.length > maxLength){
    return;
  }
  const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  availableFreelancers.push(freelancer);
  console.log(availableFreelancers);
};

const render = () => {
  const table = document.querySelector("#freelance_table");
  const freelancerElements = availableFreelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    // const newFreelancer = document.createElement("td");
    // newFreelancer.textContent = freelancer.name;
    for (const key in freelancer) {
        if (key in freelancer){
            const newFreelancer = document.createElement("td");
            newFreelancer.textContent = freelancer[key];
            row.appendChild(newFreelancer);
        }
    }
    console.log("name", freelancer.name);
    table.appendChild(row);
    // newFreelancer.textContent = freelancer.name;
  });

  // console.log(freelancerElements);
  //   flContainer.replaceChildren(...freelancerElements);
};

// console.log(availableFreelancers);
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);
const addRenderIntervalId = setInterval(render, 10000);

const updateAverage = () => {};
addFreelancer();
render();
