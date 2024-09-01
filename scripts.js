
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    }, 3000);
});


document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});
