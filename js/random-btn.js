function myFunction() {
    const buttons = ["energetic", "calm", "sad", "happy"];
    const randomElement = buttons[Math.floor(Math.random() * buttons.length)];
    document.getElementById(randomElement).click();
}



