// The user object does not have an 'address' object or a 'city' string inside it
const user = {
    name: "Ravi"
};

// ?. (Optional Chaining) checks if address exists before checking city, preventing a crash
// ?? (Nullish Coalescing) prints the right side text if the left side evaluates to missing/null
const checkCity = user.address?.city ?? "City Not Available";

console.log("Result:", checkCity);
