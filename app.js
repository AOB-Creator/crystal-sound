const sound1 = new Audio("./audio/sfx-crystal1.mp3")
const sound2 = new Audio("./audio/ES_Glass Toast Clink - SFX Producer.mp3")
const sound3 = new Audio("./audio/ES_Glasses Toast 2 - SFX Producer.mp3")
window.addEventListener("load", ()=>{
    sound2.load();
    sound3.load();
    sound1.load();
})

const redbigtoys = document.querySelectorAll(".decors .ball3")
const redtoys = document.querySelectorAll(".decors3 .ball1")
const whitetoys = document.querySelectorAll(".decors3 .ball2")


const leftspan3 = document.querySelectorAll(".decors .ball3 span:first-child")
const rightspan3 = document.querySelectorAll(".decors .ball3 span:last-child")
const leftspan2 = document.querySelectorAll(".decors .ball2 span:first-child")
const rightspan2 = document.querySelectorAll(".decors .ball2 span:last-child")
const leftspan1 = document.querySelectorAll(".decors .ball1 span:first-child")
const rightspan1 = document.querySelectorAll(".decors .ball1 span:last-child")

leftspan3.forEach((iten, indexq)=>{
    iten.addEventListener("mouseover", (event)=>{
        
        
        redbigtoys.forEach((item, index)=>{
                if(index===indexq){
                    rightspan3.forEach((itey, indexq)=>{
                        itey.classList.add("nonevis")
                    item.classList.add("animatetoright");
                    setTimeout(()=>{
                        item.classList.remove("animatetoright");
                        itey.classList.remove("nonevis")
                    }, 1000)            
                    sound3.play();
                    sound1.load()
                    sound2.load()
                    // sound3.load()
                    })
                }
        })        
    })
}) 
rightspan3.forEach((iten, indexq)=>{
    iten.addEventListener("mouseover", (event)=>{
        
        
        redbigtoys.forEach((item, index)=>{
                if(index===indexq){
                    leftspan3.forEach((itek, indexq)=>{
                        itek.classList.add("nonevis")
                    
                    item.classList.add("animatetoleft");
                    setTimeout(()=>{
                        item.classList.remove("animatetoleft");
                        itek.classList.remove("nonevis")
                    }, 1000)            
                    sound3.play();
                    sound1.load()
                    sound2.load()
                    // sound3.load()
                })
                }
        })        
    })
}) 

rightspan2.forEach((iten, indexq)=>{
    iten.addEventListener("mouseover", (event)=>{
        
        
        whitetoys.forEach((item, index)=>{
                if(index===indexq){
                    
                    leftspan2.forEach((itek, indexq)=>{
                        itek.classList.add("nonevis")
                    
                    item.classList.add("animatetoleft");
                    setTimeout(()=>{
                        item.classList.remove("animatetoleft");
                        itek.classList.remove("nonevis")
                    }, 1000)            
                    sound3.play();
                    sound1.load()
                    sound2.load()
                    // sound3.load()
                })
                }
        })        
    })
}) 

leftspan2.forEach((iten, indexq)=>{
    iten.addEventListener("mouseover", (event)=>{
        
        
        whitetoys.forEach((item, index)=>{
                if(index===indexq){
                    rightspan2.forEach((itey, indexq)=>{
                        itey.classList.add("nonevis")
                    item.classList.add("animatetoright");
                    setTimeout(()=>{
                        item.classList.remove("animatetoright");
                        itey.classList.remove("nonevis")
                    }, 1000)            
                    sound2.play();
                    sound1.load()
                    // sound2.load()
                    sound3.load()
                    })
                }
        })        
    })
}) 



rightspan1.forEach((iten, indexq)=>{
    iten.addEventListener("mouseover", (event)=>{
        
        
        redtoys.forEach((item, index)=>{
                if(index===indexq){
                    
                    leftspan1.forEach((itek, indexq)=>{
                        itek.classList.add("nonevis")
                    
                    item.classList.add("animatetoleft");
                    setTimeout(()=>{
                        item.classList.remove("animatetoleft");
                        itek.classList.remove("nonevis")
                    }, 1000)            
                    sound3.play();
                    sound1.load()
                    sound2.load()
                    // sound3.load()
                })
                }
        })        
    })
}) 

leftspan1.forEach((iten, indexq)=>{
    iten.addEventListener("mouseover", (event)=>{
        
        
        redtoys.forEach((item, index)=>{
                if(index===indexq){
                    rightspan1.forEach((itey, indexq)=>{
                        itey.classList.add("nonevis")
                    item.classList.add("animatetoright");
                    setTimeout(()=>{
                        item.classList.remove("animatetoright");
                        itey.classList.remove("nonevis")
                    }, 1000)            
                    sound2.play();
                    sound1.load()
                    // sound2.load()
                    sound3.load()
                    })
                }
        })        
    })
}) 

// redbigtoys.forEach((item, index)=>{
//     item.addEventListener("mouseenter", ()=>{
//         item.classList.add("animate");
//         setTimeout(()=>{
//             item.classList.remove("animate");
//         }, 1000)
//         sound3.play();
//     })
// })

redtoys.forEach((item, index)=>{
    item.addEventListener("mouseover", ()=>{
        item.classList.add("animate");
        setTimeout(()=>{
            item.classList.remove("animate");
        }, 1000)
        sound2.play();
        sound3.load()
        sound1.load()
    })
})

// whitetoys.forEach((item, index)=>{
//     item.addEventListener("mouseover", ()=>{
//         item.classList.add("animate");
//         setTimeout(()=>{
//             item.classList.remove("animate");
//         }, 1000)
//         sound1.play();
//         sound2.load()
//         sound3.load()
//     })
// })