const btn = document.createElement('button');

btn.onclick = function()
{
        alert('Ez egy nativ kód');
}
btn.innerHTML ='nativ gomb';
document.getElementById('nativ-button-container').appendChild(btn);