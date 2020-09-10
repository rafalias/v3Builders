console.log("it Works")

$(document).ready(function(){
    $('.submit').click(function(event) {
        console.log('submit works')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusEl = $('.status')

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusEl.append('<div>email is valid</div>')
        }
        else{
            event.preventDefault()
            statusEl.append('<div>email not valid</div>')
        }

        if(subject.length >= 2){
            statusEl.append('<div>subject is valid</div>')
        }
        else{
            event.preventDefault()
            statusEl.append('<div>subject is not valid')
        }

        if(message.length >= 10){
            statusEl.append('<div>Message is valid</div>')
        }
        else{
            event.preventDefault()
            statusEl.append('<div>Message is not valid')
        }
    })
})
