import { Button } from '@/components/Button'
import { formatBytes } from '@/utils/format-bytes'
import {
  ArrowUpTrayIcon,
  CheckCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/solid'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 text-violet-600 p-2',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: '',
      },
      error: {
        container: 'bg-red-50 border-red-300',
        icon: 'border-red-100 bg-red-200 text-red-600',
        deleteButton: 'text-red-700 hover:text-red-900',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <ArrowUpTrayIcon className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-rose-700">
              Upload Failed, please try again.
            </span>
            <span className="text-sm text-rose-500">{name}</span>
          </div>

          <button className="text-sm font-semibold text-rose-700 hover:text-rose-500">
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircleIcon className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <TrashIcon className="h-5 w-5 " />
        </Button>
      )}
    </div>
  )
}
