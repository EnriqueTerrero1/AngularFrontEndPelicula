import { ModuleWithProviders, Provider, SecurityContext } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./clipboard-button.component";
import * as i2 from "./language.pipe";
import * as i3 from "./markdown.component";
import * as i4 from "./markdown.pipe";
import * as i5 from "@angular/common";
export interface MarkdownModuleConfig {
    loader?: Provider;
    clipboardOptions?: Provider;
    markedOptions?: Provider;
    sanitize?: SecurityContext;
}
export declare class MarkdownModule {
    static forRoot(markdownModuleConfig?: MarkdownModuleConfig): ModuleWithProviders<MarkdownModule>;
    static forChild(): ModuleWithProviders<MarkdownModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkdownModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MarkdownModule, [typeof i1.ClipboardButtonComponent, typeof i2.LanguagePipe, typeof i3.MarkdownComponent, typeof i4.MarkdownPipe], [typeof i5.CommonModule], [typeof i1.ClipboardButtonComponent, typeof i2.LanguagePipe, typeof i3.MarkdownComponent, typeof i4.MarkdownPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MarkdownModule>;
}
