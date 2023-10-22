const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  //store triggered events
  window.deferredPrompt = event;
  //remove hidden class
  butInstall.classList.toggle('hidden', false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const eventPrompt = window.deferredPrompt;

  if (!eventPrompt) {
    return
  }
  //prompt to install
  eventPrompt.prompt();

  //ensuring that the prompt can only be used once
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  //clearing the prompt
  console.log('installed');
  window.deferredPrompt = null;
});
