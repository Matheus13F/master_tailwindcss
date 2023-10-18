'use client'

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import * as InputSelect from '@radix-ui/react-select'

interface SelectProps {
  children: React.ReactNode
  placeholder: string
}

export default function Select({ children, placeholder }: SelectProps) {
  return (
    <InputSelect.Root>
      <InputSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <InputSelect.Value placeholder={placeholder} className="text-black" />
        <InputSelect.Icon>
          <ChevronDownIcon className="h-5 w-5 text-zinc-500" />
        </InputSelect.Icon>
      </InputSelect.Trigger>

      <InputSelect.Portal>
        <InputSelect.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
          sideOffset={8}
        >
          <InputSelect.Viewport>{children}</InputSelect.Viewport>
        </InputSelect.Content>
      </InputSelect.Portal>
    </InputSelect.Root>
  )
}
