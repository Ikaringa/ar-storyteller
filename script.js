window.onload = function() {
    // Hide loading screen when AR.js has started
    document.querySelector('a-scene').addEventListener('loaded', function() {
        document.querySelector('.loading-overlay').style.display = 'none';
    });
    
    // Add button for instructions
    const body = document.body;
    
    const instructionsButton = document.createElement('button');
    instructionsButton.classList.add('instructions-button');
    instructionsButton.textContent = 'Help';
    body.appendChild(instructionsButton);
    
    const instructionsPanel = document.createElement('div');
    instructionsPanel.classList.add('instructions-panel');
    instructionsPanel.innerHTML = `
        <h3>How to use:</h3>
        <ol>
            <li>Point your camera at the marker images</li>
            <li>Hold the phone steady</li>
            <li>Text will appear above the markers</li>
            <li>Move to different markers to continue the story</li>
        </ol>
    `;
    body.appendChild(instructionsPanel);
    
    let instructionsVisible = false;
    instructionsButton.addEventListener('click', function() {
        if (instructionsVisible) {
            instructionsPanel.style.display = 'none';
            instructionsVisible = false;
        } else {
            instructionsPanel.style.display = 'block';
            instructionsVisible = true;
        }
    });
};
