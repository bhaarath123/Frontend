const showprofile = (name,course,city="chennai") => {
return `student${(name)} is learning ${course} in the city of${city}`;
};

const profileA = showprofile("bhaarath","javascript");
console.log(profileA);

const profileB = showprofile("Janani","python","Arcot");
console.log(profileB);
