$(document).ready(function() {
    $('#searchUser').on('keyup', function(e) {
        let username = e.target.value;

        // Make request to GitHub
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: '50dc0c99af8152312e7b',
                client_secret: '9688c037ddc2b2f7a8851b2736c6ca9b95fdc942'
            },
            success: function(result) {
                $('#profile').html(`
                    ${result.name}
                `)
            }
        });
    });
});