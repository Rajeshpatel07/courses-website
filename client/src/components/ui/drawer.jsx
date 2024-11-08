import { List } from "./list"

export function Drawer({ setIsOpen }) {
  return (
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className="sr-only" >Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <div className="-mx-3">
              <div className="mt-2 space-y-2" id="disclosure-1">
                <List style={"block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"} />
              </div>
            </div>
          </div>
          <div className="py-6">
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </div>

  )
}
