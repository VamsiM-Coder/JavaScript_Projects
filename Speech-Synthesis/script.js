const voiceSelect = document.getElementById('voiceSelect');
const textArea = document.getElementById('text');
const rate = document.getElementById('rate');
const pitch = document.getElementById('pitch');
const speakBtn = document.getElementById('speak');
const stopBtn = document.getElementById('stop');

const msg = new SpeechSynthesisUtterance();
let voices = [];

// Populate available voices
function populateVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

populateVoices();
speechSynthesis.onvoiceschanged = populateVoices;

// Set voice
voiceSelect.addEventListener('change', () => {
  msg.voice = voices.find(voice => voice.name === voiceSelect.value);
});

// Update pitch and rate
rate.addEventListener('change', () => msg.rate = rate.value);
pitch.addEventListener('change', () => msg.pitch = pitch.value);

// Speak text
speakBtn.addEventListener('click', () => {
  msg.text = textArea.value;
  speechSynthesis.cancel(); // cancel any current speaking
  speechSynthesis.speak(msg);
});

// Stop speaking
stopBtn.addEventListener('click', () => {
  speechSynthesis.cancel();
});
