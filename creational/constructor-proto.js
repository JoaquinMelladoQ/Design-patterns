class MiClase {
    constructor(p1, p2) {
        this.propiedad1 = p1
        this.propiedad2 = p2
        // I am a method
    }
    metodo() {
        // MY NAME is prototype's method
    } 
}

const instancia = new MiClase(4, 2)
console.log(instancia)
//you will not be able to visualize the prototype with this code, unless you try to reach it from the web browser

// Examples
// 1 - Extend objects

Object.prototype.log = function () {
    console.log(this);
}

const x = { a: 1 }
x.log()

// 2 - Building trim, replacing all spaces at the beginning and the end as well

if (!String.prototype.trim) {
    String.prototype.trim = function() {
        try {
            return this.replace(/^\s+|\s+$/g, "")
        } catch (e) {
            return this
        }
    }
}

const y = "    lala     ".trim()
y.log()