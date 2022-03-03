$(documnet).ready(function() {
    $("#personInfoForm").validate({
        rules: {
            name: {
                required: true,
                minlenght: 2
            }
        },
        messages: {
            name: {
                required: "Manditory",
                minlenght: "The name sould have atlest 2"
            }
        }
    }
},