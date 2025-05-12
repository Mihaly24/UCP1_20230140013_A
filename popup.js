document.addEventListener('DOMContentLoaded', function() {
    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.id = 'promo-popup';
    popupContainer.style.display = 'none';
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.backgroundColor = 'white';
    popupContainer.style.padding = '30px';
    popupContainer.style.borderRadius = '12px';
    popupContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    popupContainer.style.zIndex = '1000';
    popupContainer.style.maxWidth = '90%';
    popupContainer.style.width = '400px';
    popupContainer.style.textAlign = 'center';
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'promo-overlay';
    overlay.style.display = 'none';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '999';

    // Popup content
    popupContainer.innerHTML = `
        <h2 style="color: #3498db; margin-bottom: 15px;">🎉 Promo Spesial! 🎉</h2>
        <p style="margin-bottom: 20px; line-height: 1.6;">
            Dapatkan diskon 50% untuk pendaftaran minggu ini!
            Jangan lewatkan kesempatan emas ini untuk memulai perjalanan belajar Anda.
        </p>
        <button id="close-popup" style="
            background-color: #3498db; 
            color: white; 
            border: none; 
            padding: 10px 20px; 
            border-radius: 25px; 
            cursor: pointer;
            transition: background-color 0.3s ease;
        ">
            Tutup
        </button>
    `;

    // Add elements to body
    document.body.appendChild(overlay);
    document.body.appendChild(popupContainer);

    // Show popup after delay
    setTimeout(() => {
        overlay.style.display = 'block';
        popupContainer.style.display = 'block';
    }, 2000);

    // Close popup functionality
    const closePopup = () => {
        overlay.style.display = 'none';
        popupContainer.style.display = 'none';
    };

    // Add event listeners
    document.getElementById('close-popup').addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
});