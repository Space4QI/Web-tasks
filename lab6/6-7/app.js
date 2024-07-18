function lockedProfile() {
    const showButtons = document.querySelectorAll('button');
    showButtons.forEach(button => {
        button.addEventListener('click', function() {
            const profile = button.parentElement;
            const lockedRadio = profile.querySelector('input[type="radio"][value="lock"]');
            const unlockedRadio = profile.querySelector('input[type="radio"][value="unlock"]');
            if (lockedRadio.checked) {
                return;
            }
            const hiddenFields = profile.querySelector('.profile > div[id$="HiddenFields"]');
            if (hiddenFields.style.display === 'none') {
                hiddenFields.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                button.textContent = 'Show more';
            }
        });
    });
}

window.onload = lockedProfile;
