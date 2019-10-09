const bth_prev = document.querySelector('#gallery. Buttons .prev');  //Сохраняем кнопку назад
const bth_next = document.querySelector('#gallery. Buttons .next');  //Сохраняем кнопку вперед

var images = document.querySelector('#gallery. photos img');         //Сохраняем все изображения
var I = 0; 

bth_prev.onclick = () => {	 		//При нажатии кнопки, передаем класс предыдущему изображению
	images = [I].className = '';
	I--;
		
	if (I < 0 ) {					
		I = images.length -1 ;
	}
	images[1].className = 'shows';
}

bth_next.onclick = () => {			//При нажатии кнопки, передаем  класс следующему  изображению
	images = [I].className = '';
	I++;

	if (I > = images.length ) {			//Если счетччик больше длинны всех изображений, то передаем класс обратно первому изображению и так по кругу.
		I = 0;					
	}
	images[1].className = 'shows';
 }
}
