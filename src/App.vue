<template>
  <div class="m-20">
    <p class="text-fz16 mt-10">Accordion 手風琴</p>
    <div class="flex">
      <Button>主色一般</Button>
      <Button variant="secondary">次要顏色</Button>
      <Button variant="destructive">刪除</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline" size="icon">
        <ChevronRight class="w-4 h-4" />
      </Button>
      <Button>
        <Mail class="w-4 h-4 mr-2" />
        Login with Email
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
</script>

<style></style>
