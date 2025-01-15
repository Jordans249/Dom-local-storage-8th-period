 const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');
       
//1. it updates the clicks
        let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

        // Update display on load
        clickCountDisplay.textContent = clickCount;
        updateUI();

//2.handles the events as the primary
        // Add event listener to button
        button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

//3.alters the color of text and background
        function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }
