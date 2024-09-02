const submitBtn = document.querySelector('.submit');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('input')
const userChat = document.querySelector('.user-text');

submitBtn.addEventListener('click',function(){
    userChat.innerHTML = input.value
});

function updateContent() {

};