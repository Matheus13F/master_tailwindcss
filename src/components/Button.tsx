import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violte-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 dark:hover:bg-white/5 shadow-none text-zinc-500 dark:text-zinc-200',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  // um componente botao fechado neles mesmo, recebe o children automaticamente quando utilizado em outros lugares
  return <button {...props} className={button({ variant, className })} />
}
