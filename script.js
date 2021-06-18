var  paragraphs=["Two members of the 1984 class of Jefferson High School are chairing a group of 18 to look for a resort for the 20-year.",

"class reunion A lovely place 78 miles from the city turns out to be the best It has 254 rooms and a banquet hall to seat.",

"They will need 450 to reserve the resort Debbie Holmes was put in charge of buying 2,847 office machines for the entire.",

"She will report to the board today in Room 2784 at 5 pm The board will consider her report about those 109 firms.",

"Lynn Greene said work started on the project March 27, 2003,the 246 blueprints were mailed to the office 18 days.",

"The project should be finished by May 31,At that time there will be 47 new condominiums, each having at least 16.",

"Closed captions were created for deaf or hard of hearing individuals to assist in comprehension ,They can also be." ,

"used as a tool by those learning to read, learning to speak a non-native language, or in an environment where the audio.",

"The prints had to be 100 percent accurate before they were acceptable; The project should be finished by May 31, 2025."

];


const sampleText=document.getElementById('sampleText');
const inputText=document.getElementById('inputText');
const wpmid=document.getElementById('wpmid');
const wpmid2=document.getElementById('wpmid2');
const rawwpm=document.getElementById('rawwpm');
const accuracy=document.getElementById('accuracy');
const corchar=document.getElementById('corchar');
const incorchar=document.getElementById('incorchar');

const tim10=document.getElementById('tim10');
const tim30=document.getElementById('tim30');
const tim60=document.getElementById('tim60');
const tim120=document.getElementById('tim120');
const cTim10=document.getElementsByClassName('cTim10');
const cTim30=document.getElementsByClassName('cTim30');

const showwpm=document.getElementById('showwpm');
const hidewpm=document.getElementById('hidewpm');

const showtimer=document.getElementById('showtimer');
const hidetimer=document.getElementById('hidetimer');

const rstbtn=document.getElementById('rstbtn');
const simple=document.getElementById('simple');

const advanced=document.getElementById('advanced');


rstbtn.addEventListener('click',()=>{
    window.location.reload();
});

var timeLeft=10;//secs
function changeColors()
{
    tim10.style.backgroundColor="transparent";
    tim30.style.backgroundColor="transparent";
    tim60.style.backgroundColor="transparent";
    tim120.style.backgroundColor="transparent";
    hidewpm.style.backgroundColor="transparent";
    showwpm.style.backgroundColor="transparent";
    showtimer.style.backgroundColor="transparent";
    hidetimer.style.backgroundColor="transparent";
    simple.style.backgroundColor="transparent";
    advanced.style.backgroundColor="transparent";
    return;

}
tim10.addEventListener('click',()=>{
    timeLeft=10;
    inputText.value='';
    chngtime.innerHTML=timeLeft;
   
    changeColors();
    tim10.style.backgroundColor="#3a3a3a";
    

});

tim30.addEventListener('click',()=>{
    timeLeft=30;
    inputText.value='';
    chngtime.innerHTML=timeLeft;
    changeColors();

    tim30.style.backgroundColor="#3a3a3a";


});
tim60.addEventListener('click',()=>{
    timeLeft=60;
    inputText.value='';
    chngtime.innerHTML=timeLeft;
    changeColors();

    tim60.style.backgroundColor="#3a3a3a";

});
tim120.addEventListener('click',()=>
{
    timeLeft=120;
    inputText.value='';
    chngtime.innerHTML=timeLeft;
    changeColors();

    tim120.style.backgroundColor="#3a3a3a";

});

showwpm.addEventListener('click',()=>{
    changeColors();
    wpmid.style.display="inline-block";
    wpmid2.style.display="inline-block";
    showwpm.style.backgroundColor="#3a3a3a";
});

hidewpm.addEventListener('click',()=>{
    changeColors();
    wpmid.style.display="none";
    wpmid2.style.display="none";
    hidewpm.style.backgroundColor="#3a3a3a";
});

showtimer.addEventListener('click',()=>{
    changeColors();
    chngtime.style.display="inline-block";
    showtimer.style.backgroundColor="#3a3a3a";
});
hidetimer.addEventListener('click',()=>{
    changeColors();
    chngtime.style.display="none";
    hidetimer.style.backgroundColor="#3a3a3a";
});

simple.addEventListener('click',()=>{
    changeColors();
    
    simple.style.backgroundColor="#3a3a3a";
});

advanced.addEventListener('click',()=>{
    changeColors();
    
    advanced.style.backgroundColor="#3a3a3a";
});




let perfect=true;
// let chck=2;






const chngtime=document.getElementById('chngtime');

var chckTimerFinished=false;

var gloCorChar=0;
var gloInCorChar=0;
var gloTotalCharTyped=0;

var typedMultiplePara=false;
var corrbc=[];
var incorbc=[];

var corsi=[];
var incorsi=[];

var maxcorchar =-1;
var maxincorchar=-1;
var k=0;
var totaltextarea=0;

var correctCharacters=0;
var incorrectCharacters;
var totalCharactersTyped=0;


    var f=0;
    inputText.addEventListener('input',()=>{
        //get spans inside the sample text
       if(f==0)
       {
        var timeid=setInterval(countdown,1000);   
        f=1;
       }
        const actText=sampleText.querySelectorAll('span');
        const ipText=inputText.value;
      
         correctCharacters=0;
         incorrectCharacters=0;
         totalCharactersTyped++;
             
        actText.forEach((characterSpan,index)=>{
        const char=ipText[index];
      
            if(char==null)
            {
                characterSpan.classList.remove('in-correct');
                characterSpan.classList.remove('correct');
                
                perfect=false;
               
            }
            else
            {
                      
                if(char===characterSpan.innerText)
                {
                    characterSpan.classList.add('correct');
                   
                    ++correctCharacters;
  
                    characterSpan.classList.remove('in-correct');
                     if(char==='.')
                    {
           
                                getText();
                            
                                inputText.value='';
                                typedMultiplePara=true;       
                          
                    }
                 
                    
                 
                }
                else 
                {
                    characterSpan.classList.add('in-correct');
                    ++incorrectCharacters;
                 
                    characterSpan.classList.remove('correct');
                    perfect=false;
                   
                 
                }
             
            }
            
        
            
        });
        // console.log(`ddd ${correctCharacters} eee${incorrectCharacters}`);
        if(correctCharacters>maxcorchar)
        {
            maxcorchar=correctCharacters;
            k=1;
        }
        if(incorrectCharacters>maxincorchar)
        {
            maxincorchar=incorrectCharacters;
            k=1;
        }
     
        
    });



function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

//   var totallength=0;
  function getText()
  {
    //   console.log(getRandomIndex(0,8));
    const textt=paragraphs[getRandomIndex(0,8)];
    console.log(`length is ${textt.length}`);
    // totallength+=textt.length;
    // console.log(textt);
    sampleText.innerHTML='';
    textt.split('').forEach((character)=>{

    const characterSpan=document.createElement('span');
    characterSpan.innerText=character;
    sampleText.appendChild(characterSpan);
    });  
  }

//   var finalcorrect=calcTotalCorrect()
var finalcorrect=0;
var finalwrong=0;
//   var finalwrong=calcTotalWrong();

  function calcTotalCorrect(){
      if(typedMultiplePara)
        finalcorrect=maxcorchar+correctCharacters;
      else
      finalcorrect=maxcorchar;
    return;
  }

  function calcTotalWrong()
  {
    if(typedMultiplePara)
        finalwrong=maxincorchar+incorrectCharacters;
    else
     finalwrong=maxincorchar;
    return;
  }


 //timer and countdown function
 function countdown(){
    if(timeLeft==0)
    {
       chngtime.innerHTML=timeLeft;
       inputText.disabled = true;
       chckTimerFinished=true;
       calcTotalCorrect();
       calcTotalWrong();
       wpm();
       return true;
    }
    
       chngtime.innerHTML=timeLeft;
        timeLeft=timeLeft-1;
    
    return chckTimerFinished;
}
// console.log(totallength);

  getText();
 
function wpm()
{
    // console.log('wpmmmmmm')
    var finalwpm=finalcorrect/5;
    wpmid.innerHTML=finalwpm;
    wpmid2.innerHTML=finalwpm;
    rawwpm.innerHTML=totalCharactersTyped/5;
    corchar.innerHTML=finalcorrect;
    incorchar.innerHTML=finalwrong;
    accuracy.innerHTML=Math.floor((finalcorrect/totalCharactersTyped)*100);
    accuracy.innerHTML+=' %';
    return;
}


