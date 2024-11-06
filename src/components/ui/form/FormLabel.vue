<script lang="ts" setup>
import type { LabelProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';
import FormDescription from './FormDescription.vue';
const props = defineProps<
  LabelProps & {
    class?: HTMLAttributes['class'];
    required?: boolean;
    description?: string;
  }
>();

const { error, formItemId } = useFormField();
</script>

<template>
  <!-- 這邊我把error && 'text-destructive'的class拿掉，因為我們的label通常會因為錯誤有紅色字體出現 -->
  <!-- 預設有  mb-6 (往下8px)-->
  <Label
    :class="cn('text-fz5 mb-6', { flex: props.description }, props.class)"
    :for="formItemId"
  >
    <slot />
    <span v-if="props.required" class="text-destructive">*</span>
    <FormDescription v-if="props.description">
      {{ props.description }}
    </FormDescription>
  </Label>
</template>
