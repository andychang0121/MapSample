function Welcome(person: string) {
    return "<h2>Hello " + person + ", Lets learn TypeScript</h2>";
}

function ClickMeButton(msggageID:string) {
    const user: string = "這是固定的常數";
    document.getElementById(msggageID).innerHTML = Welcome(user);
}
