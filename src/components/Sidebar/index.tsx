'use client'

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
  Bars3Icon,
} from '@heroicons/react/24/solid'

import { NavItem } from './NavItem'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export default function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Bars3Icon className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
