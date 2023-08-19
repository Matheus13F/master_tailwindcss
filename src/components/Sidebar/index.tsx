import React from 'react'
import { Logo } from './Logo'
import {
  ChartBarIcon,
  ChartPieIcon,
  FlagIcon,
  HomeIcon,
  Square2StackIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'

import { NavItem } from './NavItem'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <InputRoot>
        <InputPrefix>
          <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Pesquisar" />
      </InputRoot>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={HomeIcon} />
        <NavItem title="Dashboard" icon={ChartBarIcon} />
        <NavItem title="Projects" icon={Square2StackIcon} />
        <NavItem title="Task" icon={ChartPieIcon} />
        <NavItem title="Reporting" icon={FlagIcon} />
        <NavItem title="Users" icon={UserCircleIcon} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={InformationCircleIcon} />
          <NavItem title="Settings" icon={Cog6ToothIcon} />
        </nav>

        <UserSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
