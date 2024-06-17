document.addEventListener("DOMContentLoaded", function() {
    // Feedback form submission
    document.querySelector('#feedback form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            const feedback = { name, email, message, date: new Date().toLocaleString() };
            let feedbackList = localStorage.getItem('feedbackList');
            if (!feedbackList) {
                feedbackList = [];
            } else {
                feedbackList = JSON.parse(feedbackList);
            }
            feedbackList.push(feedback);
            localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
            alert('Thank you for your feedback!');
            document.querySelector('#feedback form').reset();
            displayFeedback();
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Display feedback from local storage
    function displayFeedback() {
        const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
        const feedbackContainer = document.getElementById('feedback-carousel');
        feedbackContainer.innerHTML = '';

        feedbackList.forEach(feedback => {
            const feedbackEntry = document.createElement('div');
            feedbackEntry.className = 'item';
            feedbackEntry.innerHTML = `
                <div class="testimony-wrap py-4">
                    <div class="text">
                        <p class="mb-4">${feedback.message}</p>
                        <div class="d-flex align-items-center">
                            <div class="user-img" style="background-image: url(images/img13.jfif)"></div>
                            <div class="pl-3">
                                <p class="name">${feedback.name}</p>
                                <span class="position">${feedback.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            feedbackContainer.appendChild(feedbackEntry);
        });

        // Reinitialize carousel after adding new items
        $('.owl-carousel').owlCarousel('destroy'); // Destroy current instance
        $('.owl-carousel').owlCarousel(); // Reinitialize
    }

    // Initialize feedback display
    displayFeedback();
});