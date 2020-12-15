window.onload = sendApiRequest;

async function sendApiRequest() {
    let response = await fetch(`https://opentdb.com/api.php?amount=10&category=9`)
    console.log('response:', response)
    let data = await response.json();
    console.log('data:', data);
    useApiData(data);
}

function useApiData(data) {
    document.querySelector('#category').innerHTML = `Category: ${data.results[0].category}`
    document.querySelector('#difficulty').innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector('#question').innerHTML = `Question: ${data.results[0].question}`
    document.querySelector('#answer1').innerHTML = data.results[0].correct_answer
    document.querySelector('#answer2').innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector('#answer3').innerHTML = data.results[1].incorrect_answers[1]
    document.querySelector('#answer4').innerHTML = data.results[2].incorrect_answers[2]
}

document.querySelector('#answer1').addEventListener('click', ()=> {
    alert("Correct! YOU are so SMART")
    sendApiRequest();
})