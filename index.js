
const freelancers = [
    { name: "Jenny S.", price: 180, occupation: "programmer" },
    { name: "Peter M.", price: 135, occupation: "programmer" },
    { name: "Dr. Funke", price: 105, occupation: "Therapist" },
    { name: "Alice P.", price: 65, occupation: "teacher" },
    { name: "Charles Twitt esq.", price: 99, occupation: "Lawyer" },
    { name: "Abe Froman", price: 250, occupation: "Sausage King" },
    { name: "Ernie McCracken", price: 200, occupation: "Life Coach" },
    { name: "Luigi", price: 55, occupation: "Plumber" },
  ];
const availableFreelancers = [];
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

display();

const display = () => {
    const flContainer = document.querySelector("#freelist");
    const freelancerElements = freelancers.map((freelancer) => {
      const newFreelancer = document.createElement("li");
      newFreelancer.classList.add(freelancer.name, freelancer.price, freelancer.occupation);
      return newFreelancer;
    });
    flContainer.replaceChildren(...freelancerElements);
}

const addFreelancer = () => {
    const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    availableFreelancers.push({freelancer})
    display();
}
addFreelancer();