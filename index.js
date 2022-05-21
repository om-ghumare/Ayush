'use strict';
// UI functioning************************************************************************************
let selectedI=3;
// functioning of mobile nav btn
const moreBtnEl= document.querySelector('.more-icon');
const classToBeAddedEl=document.querySelector('.navbarTBA');

moreBtnEl.addEventListener('click',function() {
    classToBeAddedEl.classList.toggle('overlay-open');

})

// highlighting the selected person in the list on accounts page
let selectedPersonEl=document.querySelector('.selected-person');
const p1AccountEl=document.querySelector('.person-1');
const p2AccountEl=document.querySelector('.person-2');
const p3AccountEl=document.querySelector('.person-3');
const p4AccountEl=document.querySelector('.person-4');
const p5AccountEl=document.querySelector('.person-5');
const p6AccountEl=document.querySelector('.person-6');
const p7AccountEl=document.querySelector('.person-7');
const p8AccountEl=document.querySelector('.person-8');
const p9AccountEl=document.querySelector('.person-9');
const p10AccountEl=document.querySelector('.person-10');

const detailedName=document.querySelector('.detailed-name');
const detailedEmail=document.querySelector('.detailed-email');
const detailedAmount=document.querySelector('.detailed-amount');
const detailedImg=document.querySelector('.person-detail-img');
const detailedAccNo=document.querySelector('.detailed-accountNo');

const wSender1TBA=document.querySelector('.wSender1TBA');
const wSender2TBA=document.querySelector('.wSender2TBA');
const wSender3TBA=document.querySelector('.wSender3TBA');
const wSender4TBA=document.querySelector('.wSender4TBA');
const wSender5TBA=document.querySelector('.wSender5TBA');
const wReceiver1TBA=document.querySelector('.wReceiver1TBA');
const wReceiver2TBA=document.querySelector('.wReceiver2TBA');
const wReceiver3TBA=document.querySelector('.wReceiver3TBA');
const wReceiver4TBA=document.querySelector('.wReceiver4TBA');
const wReceiver5TBA=document.querySelector('.wReceiver5TBA');
const wAmount1TBA=document.querySelector('.wAmount1TBA');
const wAmount2TBA=document.querySelector('.wAmount2TBA');
const wAmount3TBA=document.querySelector('.wAmount3TBA');
const wAmount4TBA=document.querySelector('.wAmount4TBA');
const wAmount5TBA=document.querySelector('.wAmount5TBA');

const detailImg=document.querySelector('.person-detail-img')

p1AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p1AccountEl.classList.add('selected-person');
    selectedPersonEl=p1AccountEl;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
    // displaying table recent transfer info 
    let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;

detailImg.src="Images/gill bates.jpg";
    
})
p2AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p2AccountEl.classList.add('selected-person');
    selectedPersonEl=p2AccountEl;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
    // displaying table recent transfer info 
// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;

detailImg.src="Images/rowanatkinson.jpg";

})
p3AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.toggle('selected-person');
    p3AccountEl.classList.add('selected-person');
    selectedPersonEl=p3AccountEl;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

    // displaying table recent transfer info 
// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;

detailImg.src="Images/elonmusk.jpg";

})
p4AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p4AccountEl.classList.add('selected-person');
    selectedPersonEl=p4AccountEl;
    selectedI=3;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;

detailImg.src="Images/billnye.jpg";
})
p5AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p5AccountEl.classList.add('selected-person');
    selectedPersonEl=p5AccountEl;
    selectedI=4;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;
detailImg.src="Images/rick.jpg";
})
p6AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p6AccountEl.classList.add('selected-person');
    selectedPersonEl=p6AccountEl;
    selectedI=5;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;
detailImg.src="Images/robpat.jpg";
})
p7AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p7AccountEl.classList.add('selected-person');
    selectedPersonEl=p7AccountEl;
    selectedI=6;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;
detailImg.src="Images/felix.jpg";

})
p8AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p8AccountEl.classList.add('selected-person');
    selectedPersonEl=p8AccountEl;
    selectedI=7;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`; 

// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;
detailImg.src="Images/sean.jpg";

})
p9AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p9AccountEl.classList.add('selected-person');
    selectedPersonEl=p9AccountEl;
    selectedI=8;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;
detailImg.src="Images/henrycavil.jpg";
})
p10AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p10AccountEl.classList.add('selected-person')
    selectedPersonEl=p10AccountEl;
    selectedI=9;

    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

// displaying table recent transfer info 
let sender1=document.querySelector(".selected-person .hiddentable-sender-1");
let sender2=document.querySelector(".selected-person .hiddentable-sender-2");
let sender3=document.querySelector(".selected-person .hiddentable-sender-3");
let sender4=document.querySelector(".selected-person .hiddentable-sender-4");
let sender5=document.querySelector(".selected-person .hiddentable-sender-5");
let receiver1=document.querySelector(".selected-person .hiddentable-receiver-1");
let receiver2=document.querySelector(".selected-person .hiddentable-receiver-2");
let receiver3=document.querySelector(".selected-person .hiddentable-receiver-3");
let receiver4=document.querySelector(".selected-person .hiddentable-receiver-4");
let receiver5=document.querySelector(".selected-person .hiddentable-receiver-5");
let amount1=document.querySelector(".selected-person .hiddentable-amount-1");
let amount2=document.querySelector(".selected-person .hiddentable-amount-2");
let amount3=document.querySelector(".selected-person .hiddentable-amount-3");
let amount4=document.querySelector(".selected-person .hiddentable-amount-4");
let amount5=document.querySelector(".selected-person .hiddentable-amount-5");

wSender1TBA.textContent=sender1.textContent;
wSender2TBA.textContent=sender2.textContent;
wSender3TBA.textContent=sender3.textContent;
wSender4TBA.textContent=sender4.textContent;
wSender5TBA.textContent=sender5.textContent;
wReceiver1TBA.textContent=receiver1.textContent;
wReceiver2TBA.textContent=receiver2.textContent;
wReceiver3TBA.textContent=receiver3.textContent;
wReceiver4TBA.textContent=receiver4.textContent;
wReceiver5TBA.textContent=receiver5.textContent;
wAmount1TBA.textContent=amount1.textContent;
wAmount2TBA.textContent=amount2.textContent;
wAmount3TBA.textContent=amount3.textContent;
wAmount4TBA.textContent=amount4.textContent;
wAmount5TBA.textContent=amount5.textContent;
detailImg.src="Images/thomas.jpg";
})

