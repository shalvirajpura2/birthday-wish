// Confetti Animation
function createConfetti() {
    const colors = ['#ff69b4', '#87ceeb', '#ffd700', '#98fb98'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('.confetti-container').appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

// Initialize confetti
setInterval(createConfetti, 3000);

// Slideshow functionality
let currentSlide = 0;
const slides = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
];

function initializeSlideshow() {
    const container = document.querySelector('.slideshow-container');
    slides.forEach((slide, index) => {
        const img = document.createElement('img');
        img.src = slide;
        img.className = index === 0 ? 'active' : '';
        container.appendChild(img);
    });
}

function showSlide(index) {
    const images = document.querySelectorAll('.slideshow-container img');
    images.forEach(img => img.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    images[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Wishes Wall
function addWish() {
    const name = document.getElementById('wish-name').value;
    const message = document.getElementById('wish-message').value;
    
    if (!name || !message) return;

    const wish = { name, message, timestamp: new Date().toISOString() };
    const wishes = JSON.parse(localStorage.getItem('birthday-wishes') || '[]');
    wishes.push(wish);
    localStorage.setItem('birthday-wishes', JSON.stringify(wishes));
    
    displayWishes();
    document.getElementById('wish-name').value = '';
    document.getElementById('wish-message').value = '';
}

function displayWishes() {
    const wishes = JSON.parse(localStorage.getItem('birthday-wishes') || '[]');
    const container = document.querySelector('.wishes-container');
    container.innerHTML = wishes.map(wish => `
        <div class="wish-card">
            <strong>${wish.name}</strong>
            <p>${wish.message}</p>
            <small>${new Date(wish.timestamp).toLocaleDateString()}</small>
        </div>
    `).join('');
}

// Enhanced Music Player Controls
function initializeMusicPlayer() {
    const audio = document.getElementById('birthday-song');
    const playPauseBtn = document.getElementById('play-pause');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.add('playing');
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('playing');
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    }

    playPauseBtn.addEventListener('click', togglePlay);

    // Handle audio loading errors
    audio.addEventListener('error', () => {
        console.log('Error loading audio file');
        playPauseBtn.style.display = 'none';
    });

    return { play: () => audio.play(), pause: () => audio.pause() };
}

// Gift Reveal
function revealGift() {
    const messages = [
        "Happy 25th Birthday! Here's to a quarter century of amazing memories! 🎉",
        "25 years young and still shining bright like a diamond! ⭐",
        "Quarter of a century, infinite moments of joy! Cheers to 25! 🎂",
        "25 years of making the world a better place! Keep sparkling! 💖",
        "A special milestone deserves a special celebration! Happy 25th! 🌟"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Birthday Countdown
function updateCountdown() {
    const now = new Date();
    const birthday = new Date(2024, 2, 2); // March 2nd, 2024
    
    const difference = birthday - now;
    
    if (difference < 0) {
        // Birthday has arrived!
        document.querySelector('.countdown-timer').innerHTML = `
            <div class="birthday-arrived">
                <h2>🎉 It's Your Birthday! 🎉</h2>
                <p>Happy 25th Birthday!</p>
                <div class="celebration-emoji">🎂</div>
            </div>
        `;
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Add animation class if values change
    updateTimeUnit('days', days);
    updateTimeUnit('hours', hours);
    updateTimeUnit('minutes', minutes);
    updateTimeUnit('seconds', seconds);
}

// Helper function to update time units with animation
function updateTimeUnit(unit, value) {
    const element = document.getElementById(unit);
    if (element.textContent !== value.toString().padStart(2, '0')) {
        element.classList.add('time-update');
        setTimeout(() => element.classList.remove('time-update'), 500);
    }
    element.textContent = value.toString().padStart(2, '0');
}

// Add this function to create special 25th birthday confetti
// function createSpecialConfetti() {
//     const colors = ['#ffd700', '#ff69b4', '#87ceeb', '#98fb98'];
//     const confettiCount = 25; // Special number for 25th birthday
    
//     for (let i = 0; i < confettiCount; i++) {
//         const confetti = document.createElement('div');
//         confetti.className = 'confetti';
//         confetti.style.left = Math.random() * 100 + 'vw';
//         confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
//         confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         // confetti.innerHTML = '25'; // Add "25" to some confetti pieces
//         confetti.style.fontSize = '12px';
//         confetti.style.color = 'white';
//         document.querySelector('.confetti-container').appendChild(confetti);

//         confetti.addEventListener('animationend', () => {
//             confetti.remove();
//         });
//     }
// }

// Add this function for memory themes
function getMemoryTheme(num) {
    if (num <= 5) return '👶 Childhood';
    if (num <= 12) return '🎒 School Days';
    if (num <= 18) return '🎓 Teen Years';
    if (num <= 25) return '👩 Early 20s';
    return '🎉 25th Year';
}

// Add this function to create balloons
function createBalloons() {
    const colors = ['#ff69b4', '#87ceeb', '#98fb98', '#dda0dd', '#f0e68c'];
    const container = document.querySelector('.balloons-container');
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.setProperty('--float-time', (Math.random() * 5 + 5) + 's');
        balloon.style.setProperty('--rotation', (Math.random() * 360) + 'deg');
        
        container.appendChild(balloon);
        
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    // Create initial balloons
    for(let i = 0; i < 25; i++) {
        setTimeout(() => createBalloon(), i * 300);
    }

    // Continue creating balloons
    setInterval(() => createBalloon(), 2000);
}

// Update the startCelebration function
function startCelebration() {
    const musicPlayer = initializeMusicPlayer();
    
    // Start celebrations
    createBalloons();
    
    // Start background music with a slight delay
    setTimeout(() => {
        musicPlayer.play().catch(err => {
            console.log('Auto-play prevented:', err);
            const playPauseBtn = document.getElementById('play-pause');
            playPauseBtn.style.animation = 'bounce 1s infinite';
        });
    }, 1000);
    
    // Initialize components
    initializeGallery();
    initializeTabs();
    displayWishes();
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Enhanced slideshow function
function showImageSlideshow() {
    const slideshow = document.createElement('div');
    slideshow.className = 'background-slideshow';
    document.body.appendChild(slideshow);

    let currentImage = 2;
    const totalImages = 26;

    function showNextImage() {
        const img = document.createElement('div');
        img.className = 'slide-image animate__animated animate__fadeIn';
        img.style.backgroundImage = `url(assets/images/${currentImage}.jpg)`;
        
        slideshow.innerHTML = '';
        slideshow.appendChild(img);

        currentImage++;
        if (currentImage <= totalImages) {
            setTimeout(showNextImage, 3000);
        } else {
            setTimeout(() => {
                slideshow.classList.add('fade-out');
                setTimeout(() => slideshow.remove(), 1000);
            }, 2000);
        }
    }

    showNextImage();
}

// Add this function for memory-specific icons
function getMemoryIcons(num) {
    const icons = {
        1: '👶 First Steps',
        5: '🎈 Early Childhood',
        10: '🎒 School Days',
        13: '🎓 Teen Years',
        15: '🌟 Sweet 15',
        18: '🎊 Adult Life',
        20: '✨ Twenty',
        25: '👑 Quarter Century'
    };
    return icons[num] || '💝';
}

// Update the initialization
document.addEventListener('DOMContentLoaded', () => {
    try {
        showWelcomeMessage();
        
        // Initialize special letter
        const specialLetter = {
            name: "Your Loving Family",
            message: `
                Dearest Sister,
                As you turn 25 today, we want you to know how special you are to us...
            `,
            timestamp: new Date().toISOString()
        };

        // Add the special letter to wishes
        const wishes = JSON.parse(localStorage.getItem('birthday-wishes') || '[]');
        if (!wishes.length) {
            wishes.push(specialLetter);
            localStorage.setItem('birthday-wishes', JSON.stringify(wishes));
        }

    } catch (error) {
        console.error('Initialization error:', error);
        // Show user-friendly error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message show';
        errorMessage.textContent = 'Something went wrong. Please refresh the page.';
        document.body.appendChild(errorMessage);
    }
});

// Add error handling to image loading
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    img.src = 'assets/images/placeholder.jpg';
}

// Update gallery initialization with error handling
function initializeGallery() {
    try {
        const gallery = document.querySelector('.gallery-grid');
        if (!gallery) {
            throw new Error('Gallery container not found');
        }
        gallery.innerHTML = '';

        const images = Array.from({ length: 25 }, (_, i) => ({
            id: i + 2,
            size: getImageSize(i + 2)
        }));

        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = `gallery-item animate__animated animate__fadeIn ${img.size}`;
            item.style.animationDelay = `${index * 0.05}s`;

            item.innerHTML = `
                <div class="image-wrapper">
                    <img src="assets/images/${img.id}.jpg" 
                         alt="Memory ${img.id}" 
                         loading="lazy"
                         onload="handleImageLoad(this)"
                         onerror="handleImageError(this)">
                    <div class="year-overlay">
                        <span class="memory-number">${getMemoryTheme(img.id)}</span>
                        <span class="memory-caption">Memory #${img.id}</span>
                        <div class="memory-icons">
                            ${getMemoryIcons(img.id)}
                        </div>
                    </div>
                </div>
            `;
            
            item.addEventListener('click', () => openModal(img.id));
            gallery.appendChild(item);
        });
    } catch (error) {
        console.error('Gallery initialization error:', error);
        showErrorMessage('Failed to load gallery. Please refresh the page.');
    }
}

// Helper function to show error messages
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message show';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
}

// Enhanced modal functionality with error handling
function openModal(imageNumber) {
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const captionElement = document.querySelector('.modal-caption');
    
    modalImg.src = `assets/images/${imageNumber}.jpg`;
    modalImg.onerror = function() {
        this.onerror = null;
        this.src = `https://via.placeholder.com/800x600.jpg?text=Memory+${imageNumber}`;
    };

    const getThemeEmoji = (num) => {
        if (num <= 5) return '👶 Early Years';
        if (num <= 12) return '🎒 School Time';
        if (num <= 18) return '🎓 Teen Life';
        if (num <= 24) return '👩 Twenty Something';
        return '🎉 Quarter Century!';
    };

    captionElement.innerHTML = `
        <h3>${getThemeEmoji(imageNumber)}</h3>
        <p>Beautiful Memory #${imageNumber} ${getRandomEmoji()}</p>
    `;
    
    modal.classList.add('active');
    modalImg.classList.add('animate__animated', 'animate__zoomIn');
}

function getRandomEmoji() {
    const emojis = ['💖', '✨', '🌟', '🎈', '🎊', '🌸', '💫', '⭐', '🌺', '🎉'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Close modal with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.gallery-modal');
        if (modal.classList.contains('active')) {
            closeModal();
        }
    }
});

// Close modal function
function closeModal() {
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.getElementById('modal-image');
    modalImg.classList.remove('animate__animated', 'animate__zoomIn');
    modal.classList.remove('active');
}

// Add click event listener to close modal
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Click outside modal to close
document.querySelector('.gallery-modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-modal')) {
        closeModal();
    }
});

// Tab Functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
        });
    });
}

// Welcome message function
function showWelcomeMessage() {
    const modal = document.createElement('div');
    modal.className = 'welcome-modal animate__animated animate__fadeIn';
    modal.innerHTML = `
        <div class="welcome-content animate__animated animate__zoomIn">
            <h2>✨ Happy 25th Birthday! ✨</h2>
            <p>A quarter century of beautiful memories...</p>
            <p>You're 25 years young, but you'll always be our precious little sister!</p>
            <p>Let's celebrate this special milestone together! 🎉</p>
            <button class="start-button">Start Celebration 🎂</button>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.start-button').addEventListener('click', () => {
        modal.classList.add('animate__fadeOut');
        setTimeout(() => {
            modal.remove();
            startCelebration();
        }, 1000);
    });
}

// Function to determine image size class
function getImageSize(num) {
    if (num === 2) return 'size-large'; // First memory
    if (num === 14) return 'size-wide'; // Teen years
    if (num === 26) return 'size-large'; // Current
    if ([6, 11, 16, 21].includes(num)) return 'size-medium'; // Other milestones
    return 'size-normal';
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Tab Functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
        });
    });
}

// Add this to your image loading logic
function handleImageLoad(img) {
    img.parentElement.classList.add('loaded');
}

// Tab Functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
        });
    });
} 