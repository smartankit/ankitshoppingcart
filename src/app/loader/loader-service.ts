
import { Injectable } from '@angular/core';


@Injectable()

export class LoaderService {

	private setSpinnerComponentVisibility(displayStyle: string): any {
		const spinnerContainer: any = document.querySelector('app-cout-spinner');
		if (spinnerContainer) {
		  spinnerContainer.style.display = displayStyle;
		}
	  }
	
	  public show() {
		this.setSpinnerComponentVisibility('block');
	  }
	
	  public hide() {
		this.setSpinnerComponentVisibility('none');
	  }
}