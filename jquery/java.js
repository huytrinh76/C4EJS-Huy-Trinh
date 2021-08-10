let tabs={
    tab1: 'Small things add up to big things, remember that.',
    tab2: 'They will regret opposing me.',
    tab3: 'NaturalVision Remastered (NVR).',
    tab4: 'Be humble, sit down.',
    tab5: 'Nothing  ╭∩╮( ͡° ل͟ ͡° )╭∩╮'
}
const content=document.querySelector('.content')
const list=document.querySelector('.tab')
let i=1;
for(let k in tabs){
    if(i==1){
        list.innerHTML+=`<li class="active">Tab ${i}</li>`  
    }
    else{
        list.innerHTML+=`<li>Tab ${i}</li>`;
    }
    i++;
}  

const list_content=document.querySelectorAll('li');
for(let i=0;i<list_content.length;i++){
list_content[i].setAttribute('onclick', `showtab(${i})`);
}

showtab(0);
function showtab(x){
    content.innerText=tabs[Object.keys(tabs)[x]];
    for(let i=0;i<list_content.length;i++){
        list_content[i].className=list_content[i].className.replace=('active', '');
    }
    list_content[x].className+='active';
}