const textInput = document.getElementById('textInput');
const speakBtn = document.getElementById('speakBtn');
const rateInput = document.getElementById('rate');
const pitchInput = document.getElementById('pitch');

// Check if browser supports TTS
if (!('speechSynthesis' in window)) {
  alert("Sorry, your browser doesn't support Text-to-Speech.");
} else {
  speakBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === "") {
      alert("Please enter some text!");
      return;
    }
    
    // Create a speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice properties
    utterance.rate = parseFloat(rateInput.value);
    utterance.pitch = parseFloat(pitchInput.value);
    
    // Speak the text
    window.speechSynthesis.speak(utterance);
  });
}