const serviceID = "service_83h645r";
const templateID = "template_n8nqiyp";
document.getElementById('frm').addEventListener('submit',function(e){
    document.querySelector('.loading').style.visibility='visible'
let name=document.getElementById('name').value
let email=document.getElementById('email').value
let subject=document.getElementById('subject').value
let message=document.getElementById('message').value
// console.log(name,email,subject,message);
sendMail(name,email,subject,message);
})

function sendMail(name,email,subject,message){
    console.log("Send mail"+name);
    let params={
        to_name:name,
        subject:subject,
        from_name:email,
        message:message
    }
    emailjs.send(serviceID,templateID,params).then(function(res){
        alert(res.status,"Email Sended Successfully!!")
        document.querySelector('.loading').style.visibility='hidden'
        document.querySelector('.sent-message').style.visibility='visible'


    })
}
    



// function sendMail(e){
    
//     let abc=document.getElementById('name').value
//     console.log(abc);
//     console.log("hai");

    
//   }
