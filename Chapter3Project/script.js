// Lindsey Sample
// 03/30/2025

const fullName = "Lindsey Sample";
const desiredSalary = 60000; // just a random number lol
const veternStatus = false;
const friends = ["Adam", "Starr", "Tiffani"];
const friendsSalaries = [50000, 50000, 60000];
const anotherFriend = {
  firstName: "Brooke",
  lastName: "Frith",
  salary: 50400
};

console.log("Full Name:", fullName);
console.log("Desired Salary:", desiredSalary);
console.log("Veteran Status:", veteranStatus ? "Yes" : "No");
console.log("Friends:", friends);
console.log("Friends' Salaries:", friendsSalaries);
console.log("Another Friend:", anotherFriend);

document.getElementById("fullNameAnswer").textContent = fullName;
document.getElementById("salaryAnswer").textContent = desiredSalary;
document.getElementById("veteranAnswer").textContent = veteranStatus ? "Yes" : "No";
document.getElementById("friendsAnswer").textContent = friends.join(", ");
document.getElementById("friendsSalariesAnswer").textContent = friendsSalaries.join(", ");
document.getElementById("anotherFriendAnswer").textContent = `${anotherFriend.firstName} ${anotherFriend.lastName} - $${anotherFriend.salary}`;
