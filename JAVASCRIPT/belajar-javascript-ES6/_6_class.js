// OO class
class Members {
    constructor(name, umur) {
        this.name = name
        this.umur = umur
    }

    getMember(name) {
        return `namanya ${this.name}, umurnya ${this.umur}`
    }

    static getPoint() {
        return `point nya 90`
    }
}

let member = new Members('Zaskha', 21)
console.log(member.getMember());
console.log(Members.getPoint());