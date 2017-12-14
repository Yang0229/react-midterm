export { calculateAge };
function calculateAge(dob) {
    let birthday = new Date(dob);
    let r = Date.now() - birthday.getTime();
    let ageDate = new Date(r);
    return Math.abs(ageDate.getFullYear() - 1970);
}
