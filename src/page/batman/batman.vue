<script lang="ts" setup>
import { House } from '@lucide/vue';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

 import { Card, CardContent } from '@/components/ui/card'
 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  } from '@/components/ui/carousel'
  import Autoplay from 'embla-carousel-autoplay'

const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth"});
        return
    }
    const element = document.querySelector<HTMLElement>(sectionId);

    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
}


const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"]; 

</script>



<template>
   <div class="batman">
    <nav class="extra-nav flex  flex-col sm:flex-row justify-between px-3">
 <RouterLink to ="/">
  <House class="icon-home" />
       </RouterLink>

      <NavigationMenu>
    <NavigationMenuList class="flex flex-col sm:flex-row">
      <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#')">
         <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']" >
          Portada
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="#vehiculis" @click.prevent="scrollToSection('#vehiculis')">
           <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']" >
             Vehiculos
           </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="#videre" @click.prevent="scrollToSection('#videre')" >
           <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']" >
              Imagines 
           </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
       <NavigationMenuItem>
        <a href="#contactos" @click.prevent="scrollToSection('#contactos')">
           <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']" >
              Contacto 
           </NavigationMenuLink>
        </a>
      </NavigationMenuItem>


    </NavigationMenuList>
  </NavigationMenu>

  


   </nav>
    

    <header class="titulus"> 
    <h1>Batman</h1>
    <div id="titulus-batman" class="titulus-img"></div>
    <p>El puede tomar la decision que nadie mas puede, la decision correcta</p>
    </header>

    <section id="vehiculis">
  <div class="vehiculis-arca">
    
     <div class="item unus">
        <div class="notitia">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src="/public/imag/batman/avion.jpg"/>
      </div>

      <div class="item duo">
        <div class="notitia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="/public/imag/batman/moto.jpg"/>
      </div>
      
      <div class="item tribus">
        <div class="notitia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="/public/imag/batman/car.jpg"/>
      </div>
    </div>

    <div class="vehiculis-titulus">
      <h1>Vehículos de Batman</h1>
    </div>
 </section>

 <section
  id="videre"
  class="w-full min-h-[60vh] lg:min-h-[95vh] flex justify-center items-center overflow-hidden px-4 bg-gray-900"
>
  <Carousel
    class="w-full max-w-md md:max-w-2xl lg:max-w-4xl"
     :opts="{
              dragFree: true,
              loop: true 
     }" 
      :plugins="[Autoplay({
      delay: 2000,
      })]"
  >
    <CarouselContent>
      <CarouselItem
        v-for="photo in photos"
        :key="photo"
        class="basis-full"
      >
        <div class="p-1 w-full">
          <Card class="w-full overflow-hidden bg-gray-900 border-none">
            <CardContent 
             class="flex aspect-[6/4] items-center justify-center p}"
             >
              <img
                :src="`/imag/batman/${photo}.jpg`"
                :alt="'imagen $(1) de Batman'"
                class="block w-full h-full object-cover"
                
              
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

     <CarouselPrevious
  class="hidden md:flex justify-center items-center bg-gray-900 text-white"
/>

<CarouselNext
  class="hidden md:flex justify-center items-center bg-gray-900 text-white"
/>
</Carousel>
</section>


   </div>
</template>

<style scoped>

.batman {
  font-family: Arial, Helvetica, sans-serif;
}


/* NAVIGATION */

.extra-nav {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.icon-home {
  color: aqua;
  width: 3rem;
  height: 3rem;
}

.icon-home:hover {
  color: bisque;
}


/* HEADER */

.titulus {
  position: relative;
}

.titulus-img {
  background-size: cover;
  background-position: center center;
  background-image: url("/imag/batman/batman.jpg");

  min-height: 100vh;
  transition: background-size 0.5s;
}

.titulus-img:hover {
  background-size: 115% auto;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  color: white;
  pointer-events: none;
  font-family: batman, Arial, sans-serif;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events: none;
  font-family: batman, Arial, sans-serif;
  display: none;
}


/* VEHICLES */

#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
}

.vehiculis-arca {
  order: 1;

  display: flex;
  flex-direction: column;
}

.vehiculis-titulus {
  height: 5.5rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 1.5rem 0;
  height: 540px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.item > img {
  width: 90%;
  max-width: 450px;
  height: auto;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2);
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
}

.notitia {
  width: 90%;

  display: flex;
  flex-direction: column;
}

.notitia > small {
  font-weight: bold;
  padding: 1rem;
}

.notitia > h2 {
  font-size: 1.7rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
}


/* IMAGES AND CONTACT */

#videre,
#contactos {
  min-height: 50vh;
  padding: 4rem 2rem;
  text-align: center;
}


/* TABLET */

@media (min-width: 640px) {

  #vehiculis {
    max-width: 576px;
  }

}


/* MEDIUM SCREENS */

@media (min-width: 768px) {

  .titulus > p {
    display: block;
  }

  #vehiculis {
    max-width: 900px;
  }

  .item {
    flex-direction: row;
    height: 320px;
  }

  .notitia {
    width: 40%;
  }

  .item > img {
    width: 55%;
  }

  .unus > img {
    order: -1;
  }

}


/* LARGE SCREENS */

@media (min-width: 1024px) {

  #vehiculis {
    max-width: 1080px;
  }

  .item {
    flex-direction: column;
    height: 540px;
    flex: 1;
    min-width: 0;
  }

  .vehiculis-arca {
    flex-direction: row;
  }

  .notitia {
    width: 90%;
  }

  .item > img {
    width: 90%;
  }

}

</style>