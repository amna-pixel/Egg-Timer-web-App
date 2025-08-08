console.log("DOM loaded");
const startButton = document.querySelector('.startBtn');





startButton.addEventListener("click", startgame);



function startgame(){
    console.log("Game Started");
    const fullWebpage = document.querySelector('.full-web');
    fullWebpage.innerHTML = '';

    const head = document.createElement('div');head.className = 'head';
    const logo = document.createElement('h1');logo.className = "logo";
    logo.innerText = "Egg Timer";


    head.appendChild(logo);
    fullWebpage.appendChild(head);


    const gameBody = document.createElement('div');
    gameBody.className = "game-body";

    const bodyHeader = document.createElement('h1');
    bodyHeader.className = 'heading2';
    bodyHeader.innerText = "Choose an option";
    gameBody.appendChild(bodyHeader);


    const eggButtonSection = document.createElement('div');
    eggButtonSection.className = 'egg-Buttons';
    

    function eggButton(){
        const eggTypes = [
            {id: 'softButton', label: 'Soft Boil', img: 'Assets/Soft Boiled Egg.png'},
            {id: 'halfButton', label: 'Half Boil',img:"Assets/Half boiled egg.png"},
            {id: 'hardButton', label: 'Hard Boil',
                img:"Assets/Hard boiled egg.png"
            },
        ];

        for(let i = 0; i<eggTypes.length; i++){
            const ebutton = document.createElement('div');
            ebutton.className = 'button';
            ebutton.id = eggTypes[i].id;
            if (eggTypes[i].img) {
            const img = document.createElement('img');
            img.id = eggTypes[i].id;
            img.className = 'eggs';
            img.src = eggTypes[i].img;
            img.alt = eggTypes[i].label;
            ebutton.appendChild(img);
        }
            const label = document.createElement('h2');
           label.innerText = eggTypes[i].label;
            ebutton.appendChild(label);





        function eggButtonFunc(){   
            if(ebutton.id === 'softButton'){
                eggButtonSection.innerHTML = '';
                bodyHeader.innerText = 'You egg will be ready in...';
                const eggGIf = document.createElement('img');
                eggGIf.className = 'egg-timergif';
                eggGIf.src = "Assets/Egg gif 2.gif";
                gameBody.appendChild(eggGIf);

                const timerDisplay = document.createElement('div');
                timerDisplay.className = 'timer-display';


                const time = document.createElement('h1');
                time.className = 'time';
                time.innerText = '04:00';
                
                function startTimer() {
                    timerBtn.outerHTML = '';
                    let min = 4;
                    let sec = 0; 
                    
                    function updateTime() {
                        const m = min < 10 ? `0${min}` : min;
                        const s = sec < 10 ? `0${sec}` : sec;
                        time.innerText = `${m} : ${s}`;
                        
                    }

                    updateTime(); 

                    const timer = setInterval(() => {
                        if (sec === 0) {
                        if (min === 0) {
                            clearInterval(timer);
                            var buzzer = new Audio('Assets/Buzzer Audio.wav');
                            buzzer.play();
                            bodyHeader.innerText = 'You egg is ready!!';
                            const returnBtn = document.createElement('button');
                            returnBtn.className = 'returnBtn';
                            returnBtn.innerHTML = 'return';
                            gameBody.appendChild(returnBtn);
                            returnBtn.addEventListener('click',startgame);

                            
                            return;
                        }
                        min--;
                        sec = 59;
                        } else {
                        sec--;
                        }
                        updateTime();
                    }, 1000);
                    }


                const timerBtn = document.createElement('button');
                timerBtn.className = 'timerBtn';
                timerBtn.innerText = 'Start';
                timerBtn.addEventListener("click",startTimer);
                timerDisplay.appendChild(time);
                timerDisplay.appendChild(timerBtn);
                gameBody.appendChild(timerDisplay);
                
            }else if(ebutton.id === 'halfButton'){
                eggButtonSection.innerHTML = '';
                bodyHeader.innerText = 'You egg will be ready in...';
                const eggGIf = document.createElement('img');
                eggGIf.className = 'egg-timergif';
                eggGIf.src = "Assets/Egg gif 2.gif";
                gameBody.appendChild(eggGIf);

                const timerDisplay = document.createElement('div');
                timerDisplay.className = 'timer-display';
                const time = document.createElement('h1');
                time.className = 'time';
                time.innerText = '07:00';

                function startTimer() {
                    timerBtn.outerHTML = '';
                    let min = 7;
                    let sec = 0; 
                    
                    function updateTime() {
                        const m = min < 10 ? `0${min}` : min;
                        const s = sec < 10 ? `0${sec}` : sec;
                        time.innerText = `${m} : ${s}`;
                        
                    }

                    updateTime(); 

                    const timer = setInterval(() => {
                        if (sec === 0) {
                        if (min === 0) {
                            clearInterval(timer);

                            var buzzer = new Audio('Assets/Buzzer Audio.wav');
                            buzzer.play();
                            
                            bodyHeader.innerText = 'You egg is ready!!';
                            const returnBtn = document.createElement('button');
                            returnBtn.className = 'returnBtn';
                            returnBtn.innerHTML = 'return';
                            gameBody.appendChild(returnBtn);
                            returnBtn.addEventListener('click',startgame);
                            return;
                        }
                        min--;
                        sec = 59;
                        } else {
                        sec--;
                        }
                        updateTime();
                    }, 1000);
                    }

                const timerBtn = document.createElement('button');
                timerBtn.className = 'timerBtn';
                timerBtn.innerText = 'Start';
                timerBtn.addEventListener("click",startTimer);
                timerDisplay.appendChild(time);
                gameBody.appendChild(timerBtn);
                gameBody.appendChild(timerDisplay);
            }
            else if(ebutton.id === 'hardButton'){
                eggButtonSection.innerHTML = '';
                bodyHeader.innerText = 'You egg will be ready in...';
                const eggGIf = document.createElement('img');
                eggGIf.className = 'egg-timergif';
                eggGIf.src = "Assets/Egg gif 2.gif";
                gameBody.appendChild(eggGIf);

                const timerDisplay = document.createElement('div');
                timerDisplay.className = 'timer-display';
                const time = document.createElement('h1');
                time.className = 'time';
                time.innerText = '10:00';

                function startTimer() {
                    timerBtn.outerHTML = '';
                    let min = 10;
                    let sec = 0; 
                    
                    function updateTime() {
                        const m = min < 10 ? `0${min}` : min;
                        const s = sec < 10 ? `0${sec}` : sec;
                        time.innerText = `${m} : ${s}`;
                        
                    }

                    updateTime(); 

                    const timer = setInterval(() => {
                        if (sec === 0) {
                        if (min === 0) {
                            clearInterval(timer);
                            
                            var buzzer = new Audio('Assets/Buzzer Audio.wav');
                            buzzer.play();

                            bodyHeader.innerText = 'You egg is ready!!';
                            const returnBtn = document.createElement('button');
                            returnBtn.className = 'returnBtn';
                            returnBtn.innerHTML = 'return';
                            gameBody.appendChild(returnBtn);
                            returnBtn.addEventListener('click',startgame);
                            return;
                        }
                        min--;
                        sec = 59;
                        } else {
                        sec--;
                        }
                        updateTime();
                    }, 1000);
                    }

                const timerBtn = document.createElement('button');
                timerBtn.className = 'timerBtn';
                timerBtn.innerText = 'Start';
                timerBtn.addEventListener("click",startTimer);
                timerDisplay.appendChild(time);
                gameBody.appendChild(timerBtn);
                gameBody.appendChild(timerDisplay);
            }
        }
            
        ebutton.addEventListener('click',eggButtonFunc);
            eggButtonSection.appendChild(ebutton);
        }
    }




    
    
    eggButton();
    gameBody.appendChild(eggButtonSection);
    fullWebpage.appendChild(gameBody);
}

