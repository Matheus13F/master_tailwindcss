'use client'

import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useFileInput } from './Root'
import { useMemo } from 'react'
import Image from 'next/image'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  return (
    <>
      {previewURL === null ? (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
          <UserCircleIcon className="h-8 w-8 text-violet-400 dark:text-violet-300" />
        </div>
      ) : (
        <Image
          src={previewURL}
          alt=""
          className="h-16-w-16 rounded-full object-cover"
          width={64}
          height={64}
        />
      )}
    </>
  )
}
