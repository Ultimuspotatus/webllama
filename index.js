const submitBtn = document.querySelector('.submit');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('input')
const userChat = document.querySelector('.user-text');
const aiChat = document.querySelector('ai-text');

const apiURL = 'http://localhost:11434/api/generate';


// sendingAPIrequest
async function sendChatData() {
    const apiURL = 'http://localhost:11434/api/generate';
    const requestBody = {
        model: 'llama3.1',
        prompt: input.value,
    }
// Whole body is needed
}
//Make a request

function clearChat() {
    userChat.innerHTML = '';
    aiChat.innerHTML = '';
}

clearBtn.addEventListener('click', function(){
    clearChat();
});

submitBtn.addEventListener('click',function(){
    userChat.innerHTML = input.value;
    input.value = '';
});



function injectUserContent() {

};

function injectAiResponse() {

};