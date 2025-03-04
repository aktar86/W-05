function explain_callBack(name, age, task, task2, task3){
    console.log('My name is:', name);
    console.log('My age is now:', age);
    task();
    task2();
    task3();
}

function getFucked(){
    console.log(`if you don't follow our instraction, then you will got fucked up very soon.`);
}
function washHands(){
    console.log('wash your hands properly after finishing your lunch or dinner')
}

function showYourID(){
    console.log('task two is very simple, Always do your  job')
}


function takeShower(){
    let showerTake = 'take one or two more times shower in an one day.  must take it after workout. Thanks me later';
    console.log(showerTake)
}







explain_callBack('samir hasan' , 20, washHands, showYourID, getFucked)
// explain_callBack('kamal hasan', 25, takeShower)

