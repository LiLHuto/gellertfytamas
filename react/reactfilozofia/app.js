const btn = document.createElement('button');

btn.onclick = function()
{
        alert('Ez egy nativ kód');
}
btn.innerHTML ='Nativ gomb';
document.getElementById('nativ-button-container').appendChild(btn);