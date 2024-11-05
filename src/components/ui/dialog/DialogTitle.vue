<script setup lang="ts">
import { cn } from '@/lib/utils';
import { DialogTitle, type DialogTitleProps, useForwardProps } from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <!-- 這邊我將 font-semibold 刪除 ，它讓文字變粗 -->
  <!-- 
  leading-none ->這邊預設類似不要有linehight 我保留 
  tracking-tight -> 這邊也是預設 寬沒有間距 也保留
   -->
  <DialogTitle
    v-bind="forwardedProps"
    :class="cn('text-lg leading-none tracking-tight', props.class)"
  >
    <slot />
  </DialogTitle>
</template>
