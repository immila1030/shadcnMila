<script setup lang="ts">
import { cn } from '@/lib/utils';
import { X } from 'lucide-vue-next';
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes['class'];
    // 這邊我設定 預設如果為空會吃default 傳入 secondary 才會吃到secondary，他們會分別吃到不同padding
    variant?: '' | 'secondary';
  }
>();
const emits = defineEmits<DialogContentEmits>();
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/45 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'fixed left-1/2 top-1/2 px-16 py-15 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-20',
          {
            'p-15': props.variant === 'secondary',
          },
          props.class
        )
      "
    >
      <slot />

      <DialogClose
        class="absolute rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        :class="
          cn(
            'right-16 top-15',
            {
              'right-15 top-15': props.variant === 'secondary',
            },
            props.class
          )
        "
      >
        <X class="w-14 h-14" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
