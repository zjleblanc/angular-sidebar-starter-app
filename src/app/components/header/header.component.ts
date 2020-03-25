import { IRoute, RouteAttributes } from './../../resources/route.resources';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes : IRoute[];
  private sub: any;

  constructor(private router: Router) { }

  ngOnInit() : void {
    this.sub = this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.getRoutes(e.urlAfterRedirects);
      }
    });
  }

  ngOnDestroy() : void {
    this.sub.unsubscribe();
  }

  getRoutes = (url) => {
    var routeArray = url.split("/").filter(route => route);
    var currentRoute = routeArray[routeArray.length - 1];

    this.routes = routeArray.map((route) => {
      // If the route is an :id
      // TODO: logic should be more sophisticated
      if(!isNaN(route)){
        return {
          path: "#",
          displayName: route,
          active: route == currentRoute
        }
      }
      return {
        path: RouteAttributes[route].path,
        displayName: RouteAttributes[route].displayName,
        active: route == currentRoute
      }
    });
  }

}
