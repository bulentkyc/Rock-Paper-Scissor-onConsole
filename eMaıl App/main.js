let emails = [];

function sendEmail() {
    let email = {
        from: document.getElementById('from').value,
        to: document.getElementById('to').value,
        cc: document.getElementById('cc').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emails.push(email);

    console.log(emails);

    /* let emails = [
        {
            to: document.getElementById('to').value,
            cc: document.getElementById('cc').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        },
        {
            to: document.getElementById('to').value,
            cc: document.getElementById('cc').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        }
    ] */

    

}

/* function showInbox(){
    document.getElementById('inbox').hidden = false;
    document.getElementById('compose').hidden = true;

    document.getElementById('navInbox').classList.add('active');
    document.getElementById('navCompose').classList.remove('active');
}

function showCompose(){
    document.getElementById('inbox').hidden = true;
    document.getElementById('compose').hidden = false;

    document.getElementById('navCompose').classList.add('active');
    document.getElementById('navInbox').classList.remove('active');
} */

/* function switchScreen(reqScreen) {
let screenAct, screenPass, menuItemAct, menuItemPass;

    if (reqScreen == "inbox") {
        screenAct = 'inbox';
        screenPass = 'compose';
        menuItemAct = 'navInbox';
        menuItemPass = 'navCompose';
    } else if(reqScreen == "compose"){
        screenAct = 'compose';
        screenPass = 'inbox';
        menuItemAct = 'navCompose';
        menuItemPass = 'navInbox';
    } else{
        alert("There's a problem please contact with support service");
        return;
    }
    document.getElementById(screenAct).hidden = false;
    document.getElementById(screenPass).hidden = true;

    document.getElementById(menuItemAct).classList.add('active');
    document.getElementById(menuItemPass).classList.remove('active');


} */

let showMessage = (id) =>{
    //console.log(id);
    document.getElementById('toInfo').innerHTML = 'TO: ' + emails[id].to;
    document.getElementById('ccInfo').innerHTML = 'CC: ' + emails[id].cc;
    document.getElementById('messageInfo').innerHTML = 'Meesage: ' + emails[id].message;
}

function switchScreen(screenAct, screenPass, menuItemAct, menuItemPass) {
    
        document.getElementById(screenAct).hidden = false;
        document.getElementById(screenPass).hidden = true;
    
        document.getElementById(menuItemAct).classList.add('active');
        document.getElementById(menuItemPass).classList.remove('active');

        if(screenAct == 'inbox'){
            let currentButton;
            document.getElementById('emailList').innerHTML = '';
            emails.map((val, i) => {
                console.log(val.to, document.getElementById('account').value);
                if (val.to == document.getElementById('account').value) {
                    //`<button class="list-group-item list-group-item-action">${val.subject}</button>`
                    currentButton = document.createElement('button');
                    currentButton.id = i;
                    currentButton.setAttribute('onclick',`showMessage(${i})`);
                    currentButton.classList.add('list-group-item');
                    currentButton.classList.add('list-group-item-action');
                    currentButton.innerHTML = val.subject;
                    document.getElementById('emailList').append(currentButton);
                }
                
                //
                //
            });
        }
    
}