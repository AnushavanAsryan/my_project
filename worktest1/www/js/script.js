document.querySelector('.send').addEventListener('click', function(){
	this.textContent = this.textContent == 'Отправить' ? 'Ваше сообщение отправлено!' : 'Отправить';
});