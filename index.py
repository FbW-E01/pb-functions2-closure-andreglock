def createBase(input):
    return lambda number: print(number + input)

addSix = createBase(6)
addSix(10); # returns 16
addSix(21); # returns 27