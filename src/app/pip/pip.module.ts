import { NgModule } from "@angular/core";
import { PipComponent } from "./pip.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [PipComponent, ProductItemComponent],
  imports: [CommonModule]
})
export class PipModule {}