import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./pages/home/home").then((m) => m.HomePage),
    title: "Anna Severova — Portfolio",
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/about").then((m) => m.AboutPage),
    title: "About — Anna Severova",
  },
  {
    path: "projects",
    loadComponent: () => import("./pages/projects/projects").then((m) => m.ProjectsPage),
    title: "Projects — Anna Severova",
  },
  {
    path: "cv",
    loadComponent: () => import("./pages/cv/cv").then((m) => m.CvPage),
    title: "CV — Anna Severova",
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/contact").then((m) => m.ContactPage),
    title: "Contact — Anna Severova",
  },
  { path: "**", redirectTo: "" },
];
