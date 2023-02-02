import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { BiAtom } from 'react-icons/bi'
import { AiFillBug } from 'react-icons/ai'
import { AiFillBuild } from 'react-icons/ai'
import { AiFillDropboxCircle } from 'react-icons/ai'

const NavData = () => {
  const [isSchedule, setIsSchedule] = useState(true)
  const [isStaff, setIsStaff] = useState(false)
  const [isInvoices, setIsInvoices] = useState(false)
  const [isAccount, setIsAccount] = useState(false)
  const [iscurrentState, setIscurrentState] = useState('Schedule')

  useEffect(() => {
    if (iscurrentState !== 'Schedule') {
      setIsSchedule(false)
    }
    if (iscurrentState !== 'Staff') {
      setIsStaff(false)
    }
    if (iscurrentState !== 'Invoices') {
      setIsInvoices(false)
    }
    if (iscurrentState !== 'Account') {
      setIsAccount(false)
    }
  }, [isSchedule, isStaff, isInvoices, isAccount, iscurrentState])

  const menuItems = [
    {
      label: 'Menu',
      isHeader: true
    },
    {
      id: 'Schedule',
      label: 'Schedule',
      icon: <BiAtom />,
      link: '/home',
      click: function (e) {
        // e.preventDefault()
        setIsSchedule(!isSchedule)
        setIscurrentState('Schedule')
      },
      subItems: [
        {
          id: 'Cart',
          label: 'Cart',
          link: '/cart',
          parentId: 'Schedule'
        },
        {
          id: 'Home',
          label: 'Home',
          link: '/home',
          parentId: 'Schedule'
        }
      ],
      stateVariables: isSchedule
    },
    {
      id: 'Staff',
      label: 'Staff',
      icon: <AiFillBug />,
      link: '/PM/staff',
      click: function (e) {
        setIsSchedule(!isStaff)
        setIscurrentState('Staff')
      },
      stateVariables: isStaff
    },
    {
      id: 'Invoices',
      label: 'Invoices',
      icon: <AiFillBuild />,
      link: '/PM/Invoices',
      click: function (e) {
        setIsSchedule(!isInvoices)
        setIscurrentState('Invoices')
      },
      stateVariables: isInvoices
    },
    {
      id: 'Account',
      label: 'Account',
      icon: <AiFillDropboxCircle />,
      link: '/PM/settings',
      click: function (e) {
        setIsSchedule(!isAccount)
        setIscurrentState('Account')
      },
      stateVariables: isAccount
    }
  ]
  return <React.Fragment>{menuItems}</React.Fragment>
}

export default NavData
