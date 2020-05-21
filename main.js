let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')
let f = document.querySelector('#f')
let g = document.querySelector('#g')
let a = document.querySelector('#a')
let b = document.querySelector('#b')


var sampler = new Tone.Sampler({
	"C3" : "c.wav",
	"D3" : "d.wav",
	"E3" : "e.wav",
    "F3" : "f.wav",
    "G3" : "g.wav",
	"A3" : "a.wav",
	"B3" : "b.wav"
}, function(){
    //sampler will repitch the closest sample
    
    c.onclick = function () {

        sampler.triggerAttack('C3')
        
    }

    d.onclick = function () {

        sampler.triggerAttack('D3')
        
    }

    e.onclick = function () {

        sampler.triggerAttack('E3')
        
    }

    f.onclick = function () {

        sampler.triggerAttack('F3')
        
    }

    g.onclick = function () {

        sampler.triggerAttack('G3')
        
    }

    a.onclick = function () {

        sampler.triggerAttack('A3')
        
    }

    b.onclick = function () {

        sampler.triggerAttack('B3')
        
    }
    
    


}).toDestination()


