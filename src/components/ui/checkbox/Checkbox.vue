<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue';
import { cn } from '@/lib/utils';
import { Check, Minus } from 'lucide-vue-next';

import {
  CheckboxIndicator,
  CheckboxRoot,
  useForwardPropsEmits,
} from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<
  CheckboxRootProps & {
    class?: HTMLAttributes['class'];
    variant?: '' | 'selectAll';
  }
>();
const emits = defineEmits<CheckboxRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer h-13 w-13 shrink-0 rounded-sm border border-secondary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
        props.class
      )
    "
  >
    <CheckboxIndicator
      class="flex h-full w-full items-center justify-center text-current"
    >
      <slot>
        <Minus v-if="props.variant === 'selectAll'" class="h-13 w-13" />
        <Check v-else class="h-13 w-13" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
