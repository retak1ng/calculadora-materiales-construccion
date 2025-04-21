import { Component } from '@angular/core';
import { AlisadoDeCementoParaPisoComponent } from "../../componentes/alisado-de-cemento-para-piso/alisado-de-cemento-para-piso.component";
import { AzotadoHidrofugoBajoRevoqueComponent } from "../../componentes/azotado-hidrofugo-bajo-revoque/azotado-hidrofugo-bajo-revoque.component";
import { CarpetaHidrofugaSobreContrapisoComponent } from "../../componentes/carpeta-hidrofuga-sobre-contrapiso/carpeta-hidrofuga-sobre-contrapiso.component";
import { ColocacionDeMosaicosYBaldosasComponent } from "../../componentes/colocacion-de-mosaicos-y-baldosas/colocacion-de-mosaicos-y-baldosas.component";
import { ContrapisoComponent } from "../../componentes/contrapiso/contrapiso.component";
import { RevoqueFinoComponent } from "../../componentes/revoque-fino/revoque-fino.component";
import { RevoqueGruesoComponent } from "../../componentes/revoque-grueso/revoque-grueso.component";

@Component({
  selector: 'app-landing-page',
  imports: [ContrapisoComponent, CarpetaHidrofugaSobreContrapisoComponent, AlisadoDeCementoParaPisoComponent, ColocacionDeMosaicosYBaldosasComponent, AzotadoHidrofugoBajoRevoqueComponent, RevoqueGruesoComponent, RevoqueFinoComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
