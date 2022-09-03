import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PrimeSharedNgModule} from "./prime-shared-ng.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {SharedModule} from "primeng/api";
import { TableComponent } from './components/table/table.component';
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import { TransferCommissionPipe } from './pipes/transfer-commission.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TableComponent,
    TransferCommissionPipe,
  ],
  imports: [
    BrowserModule,
    PrimeSharedNgModule,
    SharedModule,
    TableModule,
    HttpClientModule
  ],
  exports: [
    PrimeSharedNgModule,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    HttpClientModule,
    TransferCommissionPipe
  ],
  providers: []
})
export class CustomSharedModule {
}
