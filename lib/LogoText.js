class LogoText {
    constructor(letters, color) {
        this.letters=letters
        this.color=color
    }
    checkLength() {
        if(this.letters.length <=1 || this.letters.length >3) {
            throw new Error("Logo must be between 1 and 3 characters.")
        }
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.letters}</text>`;
    }
}