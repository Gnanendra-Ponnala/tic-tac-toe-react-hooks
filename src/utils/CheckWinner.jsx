
const CheckWinner = (playerSelected, gameMode) => {

    playerSelected.sort(function(a, b){return a-b});

    console.log(playerSelected)

    let gameScenarios = [];
        const range = (min, max, step) => [...Array(max - min + 1).keys()].map(i => i + min + step);
        let min = 1
        for(let i = 1; i <= gameMode; i++){
            min = (min === i) ? min : (min + (gameMode))
            let max = i * gameMode
            let step = 0
            gameScenarios.push(range(min, max, step));
        }

        let scenarioTwoArray = []
        for(let i = 0; i < gameMode; i++) {
            let horizontal = []
            gameScenarios.forEach(element => {
                horizontal.push(element[i]);
            })

            scenarioTwoArray.push(horizontal)
        }

        let crossArray = []
        for(let i=0; i < 2; i++){
            let cross = [];
            let reqIndex = (crossArray.length > 0) ? gameScenarios[0].length : ''
            gameScenarios.forEach((element, key) => {
                cross.push(element[(reqIndex) ? (reqIndex - (key + 1)) : key])
            })

            crossArray.push(cross)

        }

        gameScenarios = [...gameScenarios, ...scenarioTwoArray, ...crossArray]

        let result = false
        gameScenarios.forEach(element => {
            if(playerSelected.filter(checkElement => element.includes(checkElement)).length >= gameMode)
            {
                result = true
            }
        })

        return result
}

export default CheckWinner
