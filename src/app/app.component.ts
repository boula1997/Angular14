import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FruitsService } from './fruits/fruits.service';
FruitsService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_CRUD';



  constructor(public translate: TranslateService, private fruitService: FruitsService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    document.getElementsByTagName("html")[0].setAttribute("lang", this.translate.getDefaultLang());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');
  }
  public static appLang: string = 'en';

  switchLang(lang: string) {

    AppComponent.appLang = lang;
    this.translate.use(lang);

    this.fruitService.get(lang).subscribe((data) => {
      this.fruitService.allFruits = data.data.fruits;
    });

    if (lang === 'ar') {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
    else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }
  }


}
