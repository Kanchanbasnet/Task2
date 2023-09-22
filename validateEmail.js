function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email = "KanchanBasnet5@gmail.com";
if (isValidEmail(email)) {
    console.log(`${email} is a valid email address.`);
} else {
    console.log(`${email} is not a valid email address.`);
}
