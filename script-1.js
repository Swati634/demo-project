
    // let js = 'amazing';
    // if(js === 'amazing') 
    // alert("JS is FUN!");
    // sum = 10+20-10+20;
    
    // console.log(sum);
    // let fn = 'abscdfghhj';
    // console.log(fn);
    // console.log(fn);
    // console.log(fn);
    

    let js = true;
    console.log(js);
    
    console.log(typeof true);
    console.log(typeof js);
    console.log(typeof 30);
    console.log('aaaaaaaaaa');
    
    let year;
    console.log(year);
    console.log(typeof year);
    
    year = 2022;
    console.log(typeof year);
    console.log(typeof null);
    
    const now = 2022;
    const agej = now - 2000;
    console.log(agej);
    console.log(agej * 2 + 10);   
    console.log(agej - 1820 > now -2020);
    
    
    //Test 1------------for operators
    
    // const massmark = 78;
    // const heightmark = 1.69;
    // const massjhon = 92;
    // const  heightjhon = 1.95;
    
    // const BMIMark = massmark / heightmark **2;
    // const BMIJhon = massjhon / (heightjhon * heightjhon);
    // const markheigherBMI = BMIMark > BMIJhon;
    
    // console.log(BMIMark, BMIJhon);
    // console.log(markheigherBMI);
    
    // console.log('string \n\
    // multiple \n\
    //  lines');
    
    // if else===================
    
     const age = 50;
     const isOldEnough = age >=18;
    
    if ( age <= 20){
    console.log('She has driving linces');
    }
    else
    {
    console.log(age + 10 );
    }
    
    const by = 2010;
    let a;
    if( by >= 2000)
    {
    a = 20;
     }
     else
     {
        a = 21;
     }
    console.log(a);
    
    // Test 2-------------
    
    const massmark = 95;
    const heightmark = 1.88;
    const massjhon = 85;
    const heightjhon = 1.76;
    
    const BMIMark = massmark / heightmark **2;
    const BMIJhon = massjhon / (heightjhon * heightjhon);
    console.log(BMIMark, BMIJhon);
    
    if(BMIMark > BMIJhon)
    {
        console.log('higher then jhon');
    }
    else
    {
        console.log('higher then mark');
    }
    
    
    const money = 100000;
    if (money )
    {
       console.log("plz dont send money");
    }
    else{
        console.log('you should get a well job');
    }
    
    
    
    1 + 2
    1991
    true && false && !false
    
    if(23 > 10) {
        const str = '23 is big';
    }
    
    const me = 'john';
    console.log(`I am ${2037 - 1999} years old ${me} `)
    
    
    //==== Functions
    
    function sum(){
    console.log('two number of sum');
    }
    sum();
    sum();
    
    
    function sub(a, b){
        console.log(a, b);
        const c = `Number with ${a} and ${b} value`;
        return c ;
        }
         sub(10, 20);
    
    // ------Array
    
    const f1 = 'abc';
    const f2 = 'pqr';
    const f3 = 'xyz';
    
    const fns = ['abc', 'pqr', 'xyz'];
    console.log(fns);
    console.log(fns[1]);
    console.log(fns.length);
    console.log(fns[fns.length - 2]);
    
    fns[1] = 'ghj';
    console.log(fns[1]);
    
    
    const calc = function (birthyeah) {
     return 2025;
    }
    
    const years = ['2001', '2002', '20003'];
    const c1 = calc(years[0]);
    const c2 = calc(years[1]);
    
    console.log( c1, c2);
    
    const fg = ['a', 'b', 'c'];
    fg.push = 'd';
    console.log(fg);
    fg.unshift('E');
    console.log(fg);
    
    fg.shift();
    console.log(fg);
        
    console.log(fg.indexOf('b'));
    console.log(fg.indexOf('Bob'));
    
    
    console.log(fg.includes('b'));
    console.log(fg.includes('Bob'));
    console.log(fg.includes(23));
    
    if (fg.includes('b')){
        console.log('you have a call friend b');
    }
    
    const Mark = {
        fullname: 'abcd',
        mass: 78,
        height: 1.69,
        calcBMI: function () {
        this.bmi = this.mass /  this.height ** 2;
        return this.bmi;
    }
    };
    
    
    const jhon = {
        fullname: 'jkiol',
        mass: 92,
        height: 1.79,
        calcBMI: function () {
            this.bmi = this.mass /  this.height ** 2;
            return this.bmi;
        }
    };
    
    Mark.calcBMI();
    jhon.calcBMI();
    console.log(Mark.bmi, jhon.bmi);
    
    
    //----looping
    
    for( let i=0; i<=10; i++ ){
        console.log(`left ${i}`);
    }
    
    
    for (let a=0; a<=5; a++){
        console.log(`------${a}`);
    
        for( let rep=1; rep<10; rep++){
            console.log(`a ${a}: ${rep}`);
        }
    }
    
    
    let p=1;
    while( p<=5){
    console.log(`you are eligible ${p}`);
    p++;
    }
    
    
    
    const calctip = function (bill){
        return bill >= 10 && bill <=110 ? bill * 0.12: bill * 0.2;
    }
    const bills=[21,22,23,24,25];
    const tips=[];
    const totals=[];
    
    for (let b=0; b<bills.length; b++){
        const tip = calctip(bills[b]);
        tips.push(tip);
        totals.push(tip + bills[b]);
    }
    console.log(bills, tips, totals);
    
    const rex=[];
    const ret=[11,22,33,44,55];
    for(i=0; i<=5; i++)
    {
        console.log(`value ${ret}`);
    }
    
    const num = function(temp) {
        let max = temp[0];
        let min = temp[0];  
        for(let i=0; i < temp.length; i++)
        {
            const curtemp = temp[i];
            if (curtemp > max) 
            if(curtemp < min)
            max = curtemp;
            min = curtemp
        }
        console.log(max, min);
        return max - min;
    };
    num([3,2,7,12]);
    
    
    // console.log(document.querySelector('.message').textContent);    
    // document.querySelector('.mesage').textContent =' Correct Number!';
    // console.log(document.querySelector('.message').textContent);
    
    
    // const number = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.number').textContent = number;
    
    // document.querySelector('.check').addEventListener('click', function ()
    // {
    // const guess = number1(Document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    // })
    
    
    
    // orderFood(pizza, garlic){
    //     console.log(f1);
    //     console.log(f2);
    // },
    // };
    
    
    //=============== Data structure Modern operators and strings
    const airline = "TAP air portugal";
    const plane = "A320";
    
    console.log(plane[0]);
    console.log(plane[1]);
    console.log('B737'[0]);
    
    console.log(airline.length);
    console.log('B737'.length);
    console.log(airline.indexOf('r'));
    console.log(airline.lastIndexOf('r'));
    console.log(airline.indexOf('portugal'));
    console.log(airline.indexOf('Portugal'));
    console.log(airline.slice(4));
    console.log(airline.slice(8));
    console.log(airline.slice(4, 7));
    console.log(airline.slice(0,airline.indexOf(' ')));
    console.log(airline.slice(airline.lastIndexOf(' ') + 1 ));
    console.log(airline.slice(-2));
    console.log(airline.slice(1, -1));
    
    const checkMiddleSeat = function (seat) {
        const s = seat.slice(-1);
    if(s === 'B' || s === 'E')
    console.log('you got the middle seat');
    else
    console.log('you got lucky'); 
    }
    
    checkMiddleSeat('11B');
    checkMiddleSeat('23C');
    checkMiddleSeat('3E');
    console.log(new String('jonas'));
    console.log(typeof new String('jonas'));
    console.log(typeof new String('jonas').slice(1));
    
    // string methods
    const passenger = 'jOnAs';
    const passengerLower = passenger.toLowerCase();
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
    console.log(passengerLower); 
    
    const email = 'hello@Jonas.io';
    const loginEmail = 'Hello@johans.Io \n';
    const normalizedEmail = loginEmail.toLowerCase().trim();
    
    console.log(normalizedEmail);
    console.log(email === normalizedEmail);
    
    const priceGB = '288,97$';
    const priceUS = priceGB.replace('$', '#').replace(',' , '.');
    console.log(priceUS);
    
    const announcement = 'All passengers come to bording door 23';
    console.log(announcement.replace('door', 'gate'));
     
    
    const planes = 'A320neo';
    console.log(plane.includes('A320'));
    
    
    
    // const newName = ['Mr.', firstName, lastName.toUpperCase()].join('');
    // console.log(newName);
    
    // const capitalizeName = function(name){
    //     const names = name.split(' ');
    //     const namesUpper = [];
    
    //     for(const n of names){
    //         namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //     }
    // }
    
    // capitalizeName('jessica ann smith davis')
    // capitalizeName('jonas schmedtman');
    
    
    //================padding
    
    const message = 'Go to gate 23!';
    console.log(message.padStart(25, '+'));
    console.log('jonas'.padStart(25,'+'));
    console.log(message.padStart(25, '+').padEnd(35, '+'));
    
    const ms = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
    }
    
    console.log(ms(123456789));
    console.log(ms('09874561236666'));
    
    //=======Repeat
    const msg = 'Hello';
    console.log(msg.repeat(3));
    
    const pl = function(n) {
        console.log(`there are ${n} planes in line ${'^'.repeat(n)}`);
    }
    pl(5);
    pl(3);
    pl(12);
    
    //====== closer look at function
    const flight = 'LH234';
    const jonas = {
        name: 'jonas schmedtmann',
        passport: 2424565663
    }
    
    const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if(passenger.passport === 2424565663){
        alert('Check in')
        console.log('check in');
    }
    else
    {
        alert('wrong passport')
        console.log('wrong passport');
    }
    }
    checkIn(flight,jonas);
    console.log(flight);
    console.log(jonas);