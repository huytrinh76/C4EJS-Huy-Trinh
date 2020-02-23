alert('Hi there, this is dev dictionary')
keyword={
    debug: 'The process of figuring out why your program has a certain error and how to fix it', 
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)', 
    defect: 'The formal word for "error"',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project', 
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels', 
}
k=prompt('Enter keyword (debug, done, defect, pm, ui/ux)').toLowerCase()
if(k=='debug'){
    alert(keyword.debug)
}
else if(k=='done'){
    alert(keyword.done)
}
else if(k=='defect'){
    alert(keyword.defect)
}
else if(k=='pm'){
    alert(keyword.pm)
}
else if(k=='ui/ux'){
    alert(keyword.uiux)
}
else{
    a=prompt(`We could not find ur word: ${k}`)
   }