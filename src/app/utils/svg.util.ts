import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

export const loadSvg = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('download', ds.bypassSecurityTrustResourceUrl('assets/download.svg'))
}