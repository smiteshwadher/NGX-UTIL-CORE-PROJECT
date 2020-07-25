import { NgModule } from '@angular/core';
import { NgxUtilCoreComponent } from './ngx-util-core.component';
import { GoogleAuthModule } from './services/GOOGLE-AUTH/google-auth.module';
import { GoogleAuthService } from './services/GOOGLE-AUTH/google-auth.service';



@NgModule({
  declarations: [NgxUtilCoreComponent],
  imports: [
    GoogleAuthModule
  ],
  exports: [NgxUtilCoreComponent],
  providers: [
    GoogleAuthService
  ]
})
export class NgxUtilCoreModule { }
