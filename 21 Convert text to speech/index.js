// WHY IT IS USED: To find and select the <button> element from your HTML file so JavaScript can control it.
let button = document.querySelector("button");

// WHY IT IS USED: To find and select the <textarea> box from your HTML file so JavaScript can read the text typed by the user.
let textarea = document.querySelector("textarea");

// WHY IT IS USED: To create a new speech request object. This acts like a blank cassette tape that will hold the text and voice settings.
let speech = new SpeechSynthesisUtterance();

// WHY IT IS USED: To listen for when the user clicks the button, triggering the audio speaking function.
button.addEventListener("click", () => {
    
    // WHAT IT DOES: Grabs whatever text the user typed inside the textarea box and saves it onto our speech object.
    speech.text = textarea.value;

    // WHY IT IS USED: Sets the vocal pitch or tone of the voice. Range is 0 (very low bass) to 2 (very high squeak). 1 is standard.
    speech.pitch = 1;

    // WHY IT IS USED: Sets the audio loudness. Range is 0 (muted) to 1 (maximum volume).
    speech.volume = 1;

    // WHY IT IS USED: Sets the spoken language accent. "en-US" tells the computer to speak in an American English accent.
    speech.lang = "en-US";

    // WHY IT IS USED: Sets the speed of the talking voice. 1 is normal speed, 0.5 is slow motion, and 2 is very fast.
    speech.rate = 1;

    // WHY IT IS USED: Tells the browser's built-in speaker engine to immediately play and talk out loud using our speech setup.
    speechSynthesis.speak(speech);
});
