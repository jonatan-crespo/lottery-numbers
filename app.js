//botão random números
const button = document.querySelector('button');
button.addEventListener('click', () => {
   function getRandomNumbers() {
        const randomNumbers = [];

        for (let i = 0; i < 6; i ++) {
            randomNumbers.push(Math.floor(Math.random() * 60) + 1);

            // Verificar se o número gerado é igual ao anterior
            if (randomNumbers[i] === randomNumbers[i - 1]) {
                randomNumbers[i] = Math.floor(Math.random() * 60) + 1;
            }

        }

        return randomNumbers;
    }

    console.log(getRandomNumbers());
}); 