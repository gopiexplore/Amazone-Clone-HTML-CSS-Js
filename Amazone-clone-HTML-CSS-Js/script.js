(function(){
    const picures=[
        "1",
        "2",
        "3",
        "4"
    ]
    const buttons=document.querySelectorAll(".btn");
    const imgDiv=document.querySelector(".hero-section");
    let counter=0;
    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            if(button.classList.contains('prev')){
                counter--;
                if(counter<0){
                    counter=picures.length-1;
                }
                imgDiv.style.background=`url('${picures[counter]}.jpg')`
                imgDiv.style.backgroundSize = 'cover';
                imgDiv.style.backgroundRepeat = 'no-repeat';
            }
            if(button.classList.contains('next')){
                counter++;
                if(counter>picures.length-1){
                    counter=0;
                }
                imgDiv.style.background=`url('./${picures[counter]}.jpg') `
                // Assuming imgDiv is your container element
                imgDiv.style.backgroundSize = 'cover';
                imgDiv.style.backgroundRepeat = 'no-repeat';
             }
        })
    } )

    
})();