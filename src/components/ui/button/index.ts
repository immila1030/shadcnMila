import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-fz5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-13 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground  hover:bg-primary-deep rounded-50 ',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-50 ',
        'outline-primary':
          'border border-input border-primary text-primary bg-background hover:bg-accent hover:text-primary rounded-50',
        'outline-secondary':
          'border border-input border-secondary text-secondary bg-background hover:bg-accent hover:text-secondary rounded-50',
        'outline-destructive':
          'border border-input border-destructive text-destructive bg-background hover:bg-accent hover:text-destructive rounded-50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-deep rounded-50',
        ghost: 'hover:bg-accent hover:text-accent-foreground rounded-50',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'border border-input border-secondary rounded-5 text-secondary bg-background hover:bg-accent hover:text-secondary',
      },
      size: {
        default: 'px-12 py-10 text-base',
        mini: 'px-8 py-4 text-sm',
        sm: 'px-16 py-10 text-base',
        lg: 'px-19 py-10 text-base',
        icon: 'p-8 text-base',
        full: 'w-full  h-full text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
