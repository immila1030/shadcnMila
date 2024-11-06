<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();

const { formDescriptionId } = useFormField();
</script>

<template>
  <!-- 這邊我拿到 text-sm ，統一在label設置 -->
  <p :id="formDescriptionId" :class="cn('text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
