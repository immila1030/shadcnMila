import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-fz5 rounded-50 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-13 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground  hover:bg-primary-deep',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        'outline-primary':
          'border border-input border-primary text-primary bg-background hover:bg-accent hover:text-primary',
        'outline-secondary':
          'border border-input border-secondary text-secondary bg-background hover:bg-accent hover:text-secondary',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-deep',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-12 py-10 m-12 ',
        mini: 'px-8 py-4',
        sm: 'px-16 py-10 text-xs',
        lg: 'px-19 py-10',
        icon: 'px-12 py-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
