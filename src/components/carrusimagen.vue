
<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface Props {
  photos: string[]
  basePath: string
  autoplayDelay?: number
  loop?: boolean
  dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplayDelay: 2000,
  loop: true,
  dragFree: true,
})
</script>

<template>
  <Carousel
    class="w-full max-w-md md:max-w-2xl lg:max-w-4xl"
    :opts="{
      dragFree: props.dragFree,
      loop: props.loop,
    }"
    :plugins="[
      Autoplay({
        delay: props.autoplayDelay,
      }),
    ]"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(photo, index) in props.photos"
        :key="photo"
        class="basis-full"
      >
        <div class="w-full p-1">
          <Card class="w-full overflow-hidden border-none bg-gray-900">
            <CardContent
              class="flex aspect-[6/4] items-center justify-center p-0"
            >
              <img
                :src="`${props.basePath}/${photo}.jpg`"
                :alt="`Imagen ${index + 1} de Batman`"
                class="block h-full w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious
      class="hidden items-center justify-center bg-gray-900 text-white md:flex"
    />

    <CarouselNext
      class="hidden items-center justify-center bg-gray-900 text-white md:flex"
    />
  </Carousel>
</template>

<style scoped>
</style>
