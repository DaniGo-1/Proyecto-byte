import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

    mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav2 = [
    {name: 'Niveles de contabilizacion', route: '/niveles-contabilizacion'}
  ]

  fillerNav = [
    {name: "Almacenadoras", route:"/almacenadoras"},
    {name: "Aseguradoras", route:"/aseguradoras"},
    {name: "Agrupación de créditos", route:"/agrupacion-de-creditos"},
    {name: "Lugares de inversión", route:"/lugares-de-inversion"},
    {name: "Ubicación de garantía", route:"/ubicacion-de-la-garantia"},
    {name: "Origen de los fondos", route:"/origen-de-los-fondos"},
    {name: "Formas de pago", route:"/formas-de-pago"},
    {name: "Destinos", route:"/destinos"},
    {name: "Categorías SIB", route:"/categorias-sib"},
    {name: "Estatus garantías reales", route:"/estatus-garantias-reales"},
    {name: "Estatus de avalúos", route:"/estatus-avaluos"},
    {name: "Ingenieros valuadores", route:"/ingenieros-valuadores"},
    {name: "Notarios", route:"/notarios"},
    {name: "Motivos de ajustes", route:"/motivos-ajustes"},
    {name: "Días inhábiles", route:"/dias-inhabiles"},
    {name: "Asesores de Prestamo", route:"/asesores-de-prestamos"},
    {name: 'Parametros de Transaccion', route:"/parametros-transaccion"},
    {name: "Cobros adicionales", route:""},
    {name: "Instituciones cobros adicionales", route:""},
    {name: "Motivos de reversa", route:""},
    {name: "Formas de desembolso", route:""},
    {name: "Motivos de referencias clientes", route:""},
    {name: "Relación transacciones depósitos", route:""},
    {name: "Medios de contacto", route:"/medios-contacto"},
    {name: "Canales de venta", route:"/canales-venta"},
    {name: "Tipos de canales de distribución", route:"/canales-distribucion"},
    {name: "Acercamientos", route:"/acercamientos"},
    {name: "Asesores de préstamo", route:""},
    {name: "Bancos", route:""},
    {name: "Tipos de deducciones", route:""},
    {name: "Tipos de prestamos", route:""},
    {name: "Datos generales (Registro y Control)", route:""},
    {name: "Tipos de transacción", route:"/tipos-transaccion"},
    {name: "Garantías Contables", route:"/garantias-contables"},
    {name: "Tipos de garantias reales", route:"/tipos-garantias"},
    {name: "Frecuencia de amortización", route:"/frecuencia-amortizacion"},
    {name: "Estados Préstamos", route:"/estados-prestamos"},
    {name: "Parametrización de número de préstamos", route:""},
    {name: "Pasos del cierre", route:""},
    {name: "Archivos de limpieza", route:""},
    {name: "Limpieza de archivos", route:""},
    {name: "Productos", route:"/productos"},
    {name: "Consultas", route:"/consultas"},
    {name: "Clasificación", route:"/clasificacion"},
    {name: "Parámetros adicionales por producto", route:"/parametros-adicionales"},
    {name: "Eventos de solicitudes", route:"/evento-solicitudes"},
    {name: "Documentos a presentar por producto", route:"/documento-presentar-producto"},
    {name: "Montos por plazo", route:"/montos-por-plazo"},
    {name: "Porcentajes de financiamiento", route:"/porcentajes-de-financiamiento"},
    {name: "Rango de plazos por interés", route:"/rango-plazo-interes"},
    {name: "Definir categorías de usuarios", route:"/definir-categorias-usuarios"},
    {name: "Asignación de categorías", route:""},
    {name: "Copiar parámetros de productos", route:""},
    {name: "Estatus legales", route:""},
    {name: 'SubProductos', route: '/sub-productos'},
  ]


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun =true;

}
