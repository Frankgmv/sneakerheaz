window.onscroll = ()=>{

    if(document.documentElement.scrollTop>50){
        document.getElementById("navbar").style.background = "var(--bg-gray1)";
    }else{
        document.getElementById("navbar").style.background = "var(--bg-dark)";
    }
}