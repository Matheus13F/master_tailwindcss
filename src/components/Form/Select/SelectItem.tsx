'use client'

import { CheckCircleIcon } from '@heroicons/react/24/solid'
import * as InputSelect from '@radix-ui/react-select'

export type SelectItemProps = InputSelect.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <InputSelect.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <InputSelect.ItemText asChild>
        <span className="text-black dark:text-zinc-100">{text}</span>
      </InputSelect.ItemText>
      <InputSelect.ItemIndicator>
        <CheckCircleIcon className="h-4 w-4 text-violet-500" />
      </InputSelect.ItemIndicator>
    </InputSelect.Item>
  )
}
