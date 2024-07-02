function identifyType(char) {
  char = char.toLowerCase(); // convert to lowercase

  if (!char) {
    throw new Error("Invalid input");
  }

  if (char.match(/[a-z]/)) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return "vowel";
      default:
        return "consonant";
    }
  } else if (char.match(/[0-9]/)) { 
    return "digit";
    
  } else { 
    return "special character";
  }
}
console.log(identifyType('2')); 
