import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

{path:'course',component:CourseComponent},

{path:'joinnow',component:JoinnowComponent},

{path:'about',component:AboutComponent},

{path:'contact',component:ContactComponent},

{path:'Footer',component:FooterComponent},

{path:'addcart',component:AddcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
