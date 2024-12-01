function submitFeedback(){
    const username=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const email=document.getElementById('email').value;
    const job=document.getElementById('job').value;
    const designation=document.getElementById('designation').value;
    const productType=document.getElementById('productType').value;
    const feedback=document.getElementById('feedback').value;
    const submitFeedback=document.getElementById('submitBtn');

    document.getElementById('userName').innerHTML=username;
    document.getElementById('userAge').innerHTML=age;
    document.getElementById('userEmail').innerHTML=email;
    document.getElementById('userJob').innerHTML=job;
    document.getElementById('userDesignation').innerHTML=designation;
    document.getElementById('userProductType').innerHTML=productType;
    document.getElementById('userSubmitFeedback').innerHTML=feedback;
    document.getElementById('userInfo').style.display='block';
    document.addEventListener('keydown', function(event){
        if (event.key==='Enter'){
            submitFeedback();
        }
    });
}
submitButton.onclick=submitFeedback;
alert('Thank you for your valuable feedback')