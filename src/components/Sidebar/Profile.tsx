import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/matheus13f.png"
        alt=""
        className="h-10 w-10 rounded-full"
        width={200}
        height={200}
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Matheus Goes
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-500">
          mathasdasdasdasdasdasdasdasdus@gmail.com
        </span>
      </div>

      <Button type="button" className="ml-auto" variant="ghost">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
