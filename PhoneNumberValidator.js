function telephoneCheck(str) {
  let checker = {
    1: /^(1\s?)?\d{3}-\d{3}-\d{4}/, // 555-555-5555
    2: /^(1\s?)?\d{3}\s\d{3}\s\d{4}/, // 555 555 5555
    3: /^(1\s?)?\(\d{3}\)\s*\d{3}-\d{4}/, // (555)555-5555 or (555) 555-5555
    4: /^(1\s?)?\d{10}$/ // 5555555555
  }
  for (let i = 1; i <= Object.values(checker).length; i++) {
    if (checker[i].test(str)) return true;
  }
  return false; 
}

console.log(telephoneCheck("27576227382"));
