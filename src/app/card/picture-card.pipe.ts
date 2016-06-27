import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pictureCard'
})
export class PictureCardPipe implements PipeTransform {

  	transform(value: any, args?: any): any {
		if(value == 11){return 'J'};
		if(value == 12){return 'Q'};
		if(value == 13){return 'K'};
		if(value == 14){return 'A'};

		return value;
	}

}
