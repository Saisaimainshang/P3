const wrapper=document.getElementsByClassName('wrapper')[0]
const loginLink=document.getElementsByClassName('login-link')[0]
const registerLink=document.getElementsByClassName('register-link')[0]
const formBox=document.getElementsByClassName('form-box')[0]
const registerBox=document.getElementsByClassName('register-box')[0]
const loginClick=document.getElementsByClassName('login-click')[0]
const removeIcon=document.getElementsByClassName('remove-icon')[0]
const ftCardOne=document.getElementsByClassName('ft-cardOne')[0]
const fairyTail=document.getElementsByClassName('fairy-tail')[0]
const glory=document.getElementsByClassName('glory')[0]
const grCardTwo=document.getElementsByClassName('gr-cardTwo')[0]
const high=document.getElementsByClassName('high')[0]
const hlCardThree=document.getElementsByClassName('hl-cardThree')[0]
const overPower=document.getElementsByClassName('over-power')[0]
const opCardFour=document.getElementsByClassName('op-cardFour')[0]
const terrify=document.getElementsByClassName('terrify')[0]
const tfCardFive=document.getElementsByClassName('tf-cardFive')[0]
const memberRemove=document.getElementsByClassName('memberRemove-icon')[0]
const memberRemoveThree=document.getElementsByClassName('memberRemove-iconThree')[0]
const memberRemoveTwo=document.getElementsByClassName('memberRemove-iconTwo')[0]
const memberRemoveFour=document.getElementsByClassName('memberRemove-iconFour')[0]
const memberRemoveFive=document.getElementsByClassName('memberRemove-iconFive')[0]
const memberRemoveSix=document.getElementsByClassName('memberRemove-iconSix')[0]
const memberRemoveEight=document.getElementsByClassName('memberRemove-iconEight')[0]
const memberRemoveNine=document.getElementsByClassName('memberRemove-iconNine')[0]
const myUL=document.getElementsByClassName('myUL')[0]
const kta6=document.getElementsByClassName('kta6')[0]
const kta0008=document.getElementsByClassName('kta0008')[0]
const kta8=document.getElementsByClassName('kta8')[0]
const kta0006=document.getElementsByClassName('kta0006')[0]
const kta9=document.getElementsByClassName('kta9')[0]
const kta0009=document.getElementsByClassName('kta0009')[0]

fairyTail.addEventListener('click' , ()=>{
    ftCardOne.classList.add('active')
    myUL.classList.add('active')
})
glory.addEventListener('click' , ()=>{
    grCardTwo.classList.add('active')
    myUL.classList.add('active')
})
high.addEventListener('click' , ()=>{
    hlCardThree.classList.add('active')
    myUL.classList.add('active')
})
overPower.addEventListener('click',()=>{
    opCardFour.classList.add('active')
    myUL.classList.add('active')
})
terrify.addEventListener('click',()=>{
    tfCardFive.classList.add('active')
    myUL.classList.add('active')
})
kta0006.addEventListener('click',()=>{
    kta6.classList.add('active')
    myUL.classList.add('active')
})
kta0008.addEventListener('click',()=>{
    kta8.classList.add('active')
    myUL.classList.add('active')
})
kta0009.addEventListener('click',()=>{
    kta9.classList.add('active')
    myUL.classList.add('active')
})
memberRemove.addEventListener('click',()=>{
    ftCardOne.classList.remove('active')
    myUL.classList.remove('active')
})
memberRemoveTwo.addEventListener('click',()=>{
    grCardTwo.classList.remove('active')
    myUL.classList.remove('active')
})
memberRemoveThree.addEventListener('click',()=>{
    hlCardThree.classList.remove('active')
    myUL.classList.remove('active')
})
memberRemoveFour.addEventListener('click',()=>{
    opCardFour.classList.remove('active')
    myUL.classList.remove('active')
})
memberRemoveFive.addEventListener('click',()=>{
    tfCardFive.classList.remove('active')
    myUL.classList.remove('active')
})
memberRemoveSix.addEventListener('click',()=>{
    kta6.classList.remove('active')
    myUL.classList.remove('active')
})
memberRemoveEight.addEventListener('click',()=>{
    kta8.classList.remove('active')
    myUL.classList.remove('active')
})
memberRemoveNine.addEventListener('click',()=>{
    kta9.classList.remove('active')
    myUL.classList.remove('active')
})
registerLink.addEventListener('click' , ()=>{
    wrapper.classList.add('active')
})
loginLink.addEventListener('click' , ()=>{
    wrapper.classList.add('active')
})
registerLink.addEventListener('click' , ()=>{
    formBox.classList.add('active')
})
loginLink.addEventListener('click' , ()=>{
    formBox.classList.remove('active')
})
registerLink.addEventListener('click' , ()=>{
    registerBox.classList.add('active')
})
loginLink.addEventListener('click' , ()=>{
    registerBox.classList.remove('active')
})

removeIcon.addEventListener('click' , ()=>{
    wrapper.classList.remove('active')
    myUL.classList.remove('active')   
})

loginClick.addEventListener('click' , ()=>{
    wrapper.classList.add('active')
    myUL.classList.add('active')
    
})

function myFunction(){
    var x = 
    document.getElementById("myInput");
    if (x.type==="password"){
        x.type="text";
    }else{
        x.type="password";
    }
}

function search() {

	let input = document.getElementById('searchbar').value;
	input=input.toLowerCase();
	let x = document.getElementsByClassName('id-no');
    let disappear = document.getElementsByClassName('myUL');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
        
			x[i].style.display="none";
		}
		else {
			x[i].style.display="";				
		}
	}
}
function show(){
    var x = 
    document.getElementById("pass");
    if (x.type==="password"){
        x.type="text";
    }else{
        x.type="password";
    }
}

