import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

import classNames from '@/utils/classNames'

export const AlertTypes = {
  error: {
    backgroundColor: 'bg-red-50',
    textColor: 'text-red-400',
    buttonStyles:
      'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50',
    icon: (
      <ExclamationCircleIcon
        className="h-5 w-5 text-red-400"
        aria-hidden="true"
      />
    ),
  },
  success: {
    backgroundColor: 'bg-green-50',
    textColor: 'text-green-400',
    buttonSyles:
      'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50',
    icon: (
      <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
    ),
  },
}

export default function InPageAlert({ message, type }) {
  return (
    <div className={classNames(type.backgroundColor, 'rounded-md p-4')}>
      <div className="flex">
        <div className="flex-shrink-0">{type.icon}</div>
        <div className="ml-3">
          <p className={classNames(type.textColor, 'text-sm font-medium')}>
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={classNames(
                type.buttonStyles,
                'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2'
              )}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
