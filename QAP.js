class MotelCustomer {
  constructor(name, birthDate, gender, roomPreferences, paymentMethod, address, phoneNumber, checkInDate, checkOutDate) {
    this.name = name;
    this.birthDate = new Date(birthDate); // Expecting birthDate in 'YYYY-MM-DD' format
    this.gender = gender;
    this.roomPreferences = roomPreferences;
    this.paymentMethod = paymentMethod;
    this.address = { ...address }; // Destructuring to ensure object integrity
    this.phoneNumber = phoneNumber;
    this.dates = {
      checkIn: new Date(checkInDate),
      checkOut: new Date(checkOutDate)
    };
  }

  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthDifference = today.getMonth() - this.birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getStayDuration() {
    const diffTime = Math.abs(this.dates.checkOut - this.dates.checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  }
}

// Create a new Motel Customer
const customer1 = new MotelCustomer(
  "Jane Doe",
  "1985-04-12",
  "Female",
  ["Non-smoking", "King bed"],
  "Visa",
  {
    street: "45 Ladysmith Dr",
    city: "St. John's",
    province: "NL",
    postalCode: "A1B 0G4"
  },
  "555-0123",
  "2024-05-01",
  "2024-05-10"
);

// Formatted template literal with customer information
const customerDescription = `
<hr>
<h3>Guest Information</h3>
<p><strong>Name:</strong> ${customer1.name}</p>
<p><strong>Age:</strong> ${customer1.getAge()} years old</p>
<p><strong>Gender:</strong> ${customer1.gender}</p>
<p><strong>Phone Number:</strong> ${customer1.phoneNumber}</p>
<p><strong>Address:</strong> ${customer1.address.street}, ${customer1.address.city}, ${customer1.address.state} ${customer1.address.postalCode}</p>
<p><strong>Room Preferences:</strong> ${customer1.roomPreferences.join(", ")}</p>
<p><strong>Payment Method:</strong> ${customer1.paymentMethod}</p>
<p><strong>Check-in Date:</strong> ${customer1.dates.checkIn.toISOString().slice(0, 10)}</p>
<p><strong>Check-out Date:</strong> ${customer1.dates.checkOut.toISOString().slice(0, 10)}</p>
<p><strong>Duration of Stay:</strong> ${customer1.getStayDuration()} days</p>
<hr>
`;

console.log(customerDescription);
