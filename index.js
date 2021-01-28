$('document').ready(() => {
    $('.gform').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxrTzkuqRbj7j4w_lMn9FNEKdS2qy22-pAQ_TQ1Ww/exec",
            data: $(this).serialize(),
            type: "POST",
            // dataType: "xml",
            success: function (data) {
                console.log('Submission successful');
            },
            error: function (xhr, status, error) {
                console.log('Submission failed: ' + error);
            }
        });


        $(this)[0].reset();

        $(".thankyou").html("<em>Thank you for contacting me! I will get back to you soon!</em>")
    });



})