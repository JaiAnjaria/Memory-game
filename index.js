var btnclr=['red','blue','green','yellow']
var gamePattern =[]
var userclickedpttrn=[]
var colouruser
var level = 0
var it = true
var index


$(document).keypress(function(){
     if (it) {
        nextsequence() 
        it = false
     }


})


$(".btn").click(function(){   // use .click not on('click')
    colouruser  =$(this).attr('id') //to get attribute use $(this).attr not this.attr
    userclickedpttrn.push(colouruser)//the variable coloruser is defined inside the function only
    
    index  = userclickedpttrn.length -1// check THIS PA
    console.log(index)
    
    checkans(index)
    playsound(colouruser)
    animatepress(colouruser)

 })


function nextsequence(){
    level+=1
    userclickedpttrn=[]
    $('#level-title').text('level '+level)
var jai =  Math.random()
no= jai*3
var whole = Math.round(no)
var color= btnclr[whole]
gamePattern.push(color)

$("#" + color).fadeIn(100).fadeOut(100).fadeIn(100)           //flash
playsound(colouruser)

 }

function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play()
}


function animatepress(press){
    $("#"+press).addClass('pressed')
   setTimeout(function (){
    $("#"+press).removeClass('pressed')
},100)


}

function checkans(crntlevel){
    if( userclickedpttrn[crntlevel]== gamePattern[crntlevel])
      { if (userclickedpttrn.length== gamePattern.length)
       { setTimeout(function(){nextsequence()},1000)//always function is written in inside function(){}
        } }
    else
     {var aud = new Audio('sounds/wrong.mp3')
    aud.play()
    $('body').addClass('game-over')
    $('h1').text('GAME OVER press any key to restart')
   setTimeout(function (){
    $('body').removeClass('game-over')
},200)
    startover()

    }
     
}

function startover()
{   gamePattern =[]
   userclickedpttrn=[]
   level=0
   index=0
   it = true
   $(document).keypress(function(){
    if (it) {
       nextsequence() 
       it = false
    }


})

}