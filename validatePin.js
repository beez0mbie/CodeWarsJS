function validatePIN (pin) {
    for (let i = 0; i <= pin.length; i++) {
    if (!Number.isInteger(+pin.charAt(i))) {
        console.log(+pin.charAt(i))
        return false
    } else if (pin.charAt(i).match(/\s/)){
        console.log(pin.charAt(i))
        return false
      }
    }
    return((pin.length === 4 || pin.length === 6) && parseInt(+pin) >= 0 && +pin % 1 === 0)
  }

validatePIN("0000\n")