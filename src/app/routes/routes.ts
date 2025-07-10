import Rick from "@/pages/rick";
import Starwars from "@/pages/Starwars";
import MainLayout from "@/app/layouts/Layout";
import Home from "@/pages/Home";
import type {  LayoutRoute } from '@/types/index';

export const routes : LayoutRoute[]  = [
  {
      layout: MainLayout,
      routes: [
        {
            name: "Home",
            title: "Home",
            path: "/",
            component: Home,
            isPublic: true,
        

        },
         {
            name: "rick",
            title: "Rick and Morty",
            path: "/rick",
            component: Rick,
            isPublic: true,
        
            
        },
          {
            name: "starwars",
            title: "Starwars",
            path: "/starwars",
            component: Starwars,
            isPublic: true,
           
        }
      ]
  },
    
]
