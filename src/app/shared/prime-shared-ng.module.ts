import {NgModule} from "@angular/core";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DynamicDialogModule,
    CommonModule,
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DynamicDialogModule,
    DynamicDialogModule,
    CommonModule,
  ]
})
export class PrimeSharedNgModule {
}
