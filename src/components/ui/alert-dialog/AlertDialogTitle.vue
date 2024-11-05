<script setup lang="ts">
import { cn } from '@/lib/utils';
import { AlertDialogTitle, type AlertDialogTitleProps } from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<
  AlertDialogTitleProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <!-- 這邊我將 font-semibold 刪除 ，它讓文字變粗 -->
  <AlertDialogTitle v-bind="delegatedProps" :class="cn('text-lg', props.class)">
    <slot />
  </AlertDialogTitle>
</template>
