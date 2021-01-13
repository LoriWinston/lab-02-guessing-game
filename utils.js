export function compareNumbers (UserGuess, ComputerNumber) {
if (UserGuess === ComputerNumber) return 0
if (UserGuess > ComputerNumber) return 1
else return -1
}
