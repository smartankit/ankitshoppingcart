import {Component, OnInit, OnDestroy,Input} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'app-cout-spinner',
    styles: [`
    #loadingDiv{
        position: fixed;
        top: 50%;
        left: 50%;
        display: block;
   
      }
    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
      }
      
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  `],
  template: `
  <div id="loadingDiv">
    <div>
    <div class="loader"></div>
    </div>
</div>
   `
    })
export class LoaderComponent  {
    
}