const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;                  // Store the triggered events
    butInstall.classList.toggle('hidden', false);   // Remove the hidden class from the button.
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // Check if the deferredPrompt is available
    if (!promptEvent) {
        return;
    }
     // Show the installation prompt to the user
    promptEvent.prompt();
    // Reset the deferredPrompt to null after showing the prompt
    window.deferredPrompt = null;
    // Hide the install button by adding the 'hidden' class
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
