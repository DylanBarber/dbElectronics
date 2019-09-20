$(document).ready(function() {

    $('form[name="contact-form"').validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            subject: 'required',
            message: 'required'
        },
        messages: {
            name: 'Please enter your name',
            email: 'Please enter  a valid Email address',
            subject: 'Please enter a subject',
            message: 'Please enter a message'
        },
        submitHandler: function(form) {
            form.submit();
        }
    })
    console.log('test');

})