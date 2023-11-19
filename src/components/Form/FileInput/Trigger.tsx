'use client'

import { CloudIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm 
    hover:border-violet-200 hover:bg-violet-50 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300 "
    >
      <div className="rounded-full border-6 border-zinc-100 bg-zinc-200 p-2 group-hover:border-violet-100 group-hover:bg-violet-200 dark:border-zinc-800 dark:bg-zinc-700 dark:group-hover:border-zinc-600">
        <CloudIcon className="h-5 w-5 text-zinc-600 group-hover:text-violet-600 dark:border-zinc-700 dark:text-zinc-800 dark:group-hover:border-zinc-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 dark:text-violet-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max 800x400px)</span>
      </div>
    </label>
  )
}
