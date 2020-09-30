import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { StickyHeaderComponent } from './ui/sticky-header/sticky-header.component';
import { TimelineComponent } from './ui/timeline/timeline.component';
import { PinDateComponent } from './ui/pin-date/pin-date.component';
import { PinSpotlightComponent } from './ui/pin-spotlight/pin-spotlight.component';
import { ListComponent } from './ui/list/list.component';
import { ChronometerComponent } from './ui/chronometer/chronometer.component';
import { TimelineDateComponent } from './ui/timeline-date/timeline-date.component';
import { TimelineContentComponent } from './ui/timeline-content/timeline-content.component';
import { TimelineRefsComponent } from './ui/timeline-refs/timeline-refs.component';
import { TimelineStepComponent } from './ui/timeline-step/timeline-step.component';
import { KaiserLogoComponent } from './ui/kaiser-logo/kaiser-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StickyHeaderComponent,
    TimelineComponent,
    PinDateComponent,
    PinSpotlightComponent,
    ListComponent,
    ChronometerComponent,
    TimelineDateComponent,
    TimelineContentComponent,
    TimelineRefsComponent,
    TimelineStepComponent,
    KaiserLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
