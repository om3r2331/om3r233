const messages = []


document.querySelector('.chat-input').addEventListener('submit', function (event){
    event.preventDefault();

    const input = document.getElementById('input').value
    document.getElementById('input').value = '';
    messages.push({
           role: 'user',
           content: input,
           

    })

    displayMessage(input, 'U');


    fetch('https://gpt-gateway.vercel.app/chat', {
        method: 'post',
        body: JSON.stringify({
        messages: messages
        }),
           headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => {
        messages.push(res);
        displayMessage(res.content, 'AI');
    })
})

function displayMessage(content, by) {
    document.querySelector('.chat-area').innerHTML += `
     <div class="chat by-${by}">
                    <div class="avatar">
                    ${by}
                        
                    </div>
                    <div class="chat-content">
                        ${content}
                    </div>
                 </div> `

}